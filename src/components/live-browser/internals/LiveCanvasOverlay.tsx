import { useLiveCanvas, useLiveState } from "@microsoft/live-share-react";
import { InkingTool, PointerInputProvider } from "@microsoft/live-share-canvas";
import { FC, useRef, useEffect, MutableRefObject } from "react";
import { Button, tokens } from "@fluentui/react-components";
import { NonClickablePointerInputProvider } from "../../../utils";
import { FlexRow } from "../../flex";
import { LOCAL_RANDOM_NAME } from "../../../constants";
import { InkingControls } from "./InkingControls";

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
    const [inkingActive, setInkingActive] = useLiveState(
        "inking-active",
        false
    );
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
        }
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
        const inputProvider = inkingActive
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
    }, [inkingManager, hostRef, inkingActive, hOffset, vOffset]);

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
                    pointerEvents: inkingActive ? "auto" : "none",
                    backgroundColor: "transparent",
                }}
            />
            <FlexRow hAlign="center"
                style={{
                    bottom: "24px",
                    left: 0,
                    width: `${width}px`,
                    position: "fixed",
                    zIndex: 3,
                    borderRadius: "4px",
                    shadow: tokens.shadow28,
                    pointerEvents: "none",
                }}
            >
                <FlexRow
                    style={{
                        padding: "4px",
                        backgroundColor: tokens.colorNeutralBackground6,
                        borderRadius: "4px",
                        shadow: tokens.shadow28,
                        pointerEvents: "auto",
                    }}
                >
                    {inkingManager && (
                        <InkingControls
                            inkingManager={inkingManager}
                            isEnabled={inkingActive}
                            setIsEnabled={setInkingActive}
                        />
                    )}
                    <Button
                        appearance="subtle"
                        size="small"
                        onClick={() => {
                            inkingManager?.clear();
                        }}
                    >
                        {"Clear"}
                    </Button>
                </FlexRow>
            </FlexRow>
        </>
    );
};
