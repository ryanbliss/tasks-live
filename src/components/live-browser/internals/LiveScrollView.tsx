import { FC, ReactNode, CSSProperties, useRef, useEffect } from "react";
import { FlexColumn, FlexItem, FlexRow } from "../../flex";
import debounce from "lodash.debounce";
import { useLiveState } from "@microsoft/live-share-react";

interface ILiveScrollViewProps {
    uniqueKey: string;
    direction?: "vertical" | "horizontal";
    fill?: "both" | "height" | "width" | "view" | "view-height";
    children: ReactNode;
    style?: CSSProperties;
}

interface IScrollData {
    scrollTop: number;
    scrollLeft: number;
}

export const LiveScrollView: FC<ILiveScrollViewProps> = ({
    uniqueKey,
    direction = "vertical",
    fill,
    children,
    style,
}) => {
    const scrollViewRef = useRef<HTMLDivElement>(null);
    const [state, setState] = useLiveState<IScrollData>(
        uniqueKey,
        { scrollTop: 0, scrollLeft: 0 }
    );

    useEffect(() => {
        const onScrollEvent = debounce((event: Event) => {
            const scrollTop = (event.target as any)?.scrollTop;
            const scrollLeft = (event.target as any)?.scrollLeft;
            if (typeof scrollTop !== "number" || typeof scrollLeft !== "number")
                return;
            setState({ scrollTop, scrollLeft });
        }, 50);
        scrollViewRef.current?.addEventListener("scroll", onScrollEvent);
        return () => {
            scrollViewRef.current?.removeEventListener("scroll", onScrollEvent);
        };
    }, [setState]);

    useEffect(() => {
        const scrollTop = scrollViewRef.current?.scrollTop;
        const scrollLeft = scrollViewRef.current?.scrollLeft;
        const remoteScrollTop = state?.scrollTop;
        const remoteScrollLeft = state?.scrollLeft;
        if (
            typeof scrollTop !== "number" ||
            typeof scrollLeft !== "number" ||
            typeof remoteScrollTop !== "number" ||
            typeof remoteScrollLeft !== "number"
        )
            return;

        scrollViewRef.current?.scrollTo(remoteScrollLeft, remoteScrollTop);
    }, [state?.scrollTop, state?.scrollLeft]);

    if (direction === "horizontal") {
        return (
            <FlexRow
                fill={fill}
                ref={scrollViewRef}
                scroll
                style={style}
                name="LiveScrollView"
            >
                <FlexItem noShrink>
                    <FlexRow name="InnerLiveScrollView" fill="height">{children}</FlexRow>
                </FlexItem>
            </FlexRow>
        );
    }

    return (
        <FlexColumn
            fill={fill}
            ref={scrollViewRef}
            scroll
            style={style}
            name="LiveScrollView"
        >
            <FlexItem noShrink>
                <FlexColumn name="InnerLiveScrollView">{children}</FlexColumn>
            </FlexItem>
        </FlexColumn>
    );
};
