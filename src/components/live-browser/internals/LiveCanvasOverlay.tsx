import { useLiveCanvas, useSharedState } from "@microsoft/live-share-react";
import { InkingTool, PointerInputProvider } from "@microsoft/live-share-canvas";
import { FC, useRef, useEffect, MutableRefObject } from "react";
import { Button, tokens } from "@fluentui/react-components";
import { NonClickablePointerInputProvider } from "../../../utils";
import { FlexRow } from "../../flex";
import { LOCAL_RANDOM_NAME } from "../../../constants";

interface ILiveCanvasOverlayProps {
    width: number;
    height: number;
    hostRef: MutableRefObject<HTMLElement | null>;
}

export const LiveCanvasOverlay: FC<ILiveCanvasOverlayProps> = ({
    width,
    height,
    hostRef,
}) => {
    const canvasRef = useRef<HTMLDivElement>(null);
    const [penActive, setPenActive] = useSharedState("pen-active", false);
    const { inkingManager } = useLiveCanvas(
        "live-canvas",
        canvasRef,
        true,
        InkingTool.pen,
        undefined,
        undefined,
        undefined,
        "topLeft",
        true,
        {
            displayName: LOCAL_RANDOM_NAME,
        },
    );
    useEffect(() => {
        canvasRef.current!.onclick = (e) => {
            e.preventDefault();
        };
    }, []);

    const widthRemainder = window.document.body.clientWidth - width;
    const hOffset = widthRemainder / 2;

    const heightRemainder = window.document.body.clientHeight - height;
    const vOffset = heightRemainder / 2;

    useEffect(() => {
        const hostElement = hostRef?.current;
        if (!inkingManager || !hostElement) return;
        const inputProvider = penActive
            ? new PointerInputProvider(
                  canvasRef!.current!.getElementsByTagName("canvas")[0]
              )
            : new NonClickablePointerInputProvider(
                  hostElement,
                  hOffset,
                  vOffset
              );
        inputProvider.activate();
        inkingManager.inputProvider = inputProvider;
        return () => {
            inputProvider.deactivate();
        };
    }, [inkingManager, hostRef, penActive, hOffset, vOffset]);

    return (
        <>
            <div
                ref={canvasRef}
                style={{
                    position: "absolute",
                    // These were used when trying to center page, didn't work well but might be worth revisiting
                    // left: `${hOffset}px`,
                    // right: `${hOffset}px`,
                    // top: `${vOffset}px`,
                    // bottom: `${vOffset}px`,
                    left: 0,
                    top: 0,
                    height: `${height}px`,
                    width: `${width}px`,
                    zIndex: 2,
                    pointerEvents: penActive ? "auto" : "none",
                    backgroundColor: "transparent",
                }}
            />
            <FlexRow
                style={{
                    padding: "4px",
                    backgroundColor: tokens.colorBrandBackground2,
                    bottom: "8px",
                    left: "8px",
                    position: "fixed",
                    zIndex: 3,
                    borderRadius: "4px",
                }}
            >
                <Button
                    appearance="subtle"
                    onClick={() => {
                        setPenActive(!penActive);
                    }}
                >
                    {penActive ? "Disable pen" : "Enable pen"}
                </Button>
                <Button
                    appearance="subtle"
                    onClick={() => {
                        inkingManager?.clear();
                    }}
                >
                    {"Clear"}
                </Button>
            </FlexRow>
        </>
    );
};
