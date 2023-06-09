import { FC, useCallback } from "react";
import { FlexColumn, FlexRow } from "../../components";
import { LiveScrollView } from "../../components/live-browser/internals";
import { Card, Subtitle1, Title1 } from "@fluentui/react-components";
import { AppRoutes, HOME_PAGE_TITLE_1, KANBAN_BOARDS } from "../../constants";
import { IKanbanBoard } from "../../interfaces";
import { useAppContext } from "../../context";

export const BrowseHomePage: FC = () => {
    const { navigate } = useAppContext();
    const onClickBoard = useCallback((board: IKanbanBoard) => {
        const route = `${AppRoutes.teams.children.meeting.children.board.base}`.replace(":boardId", board.id);
        navigate(route);
    }, [navigate]);
    return (
        <FlexRow fill="both" hAlign="center">
            <LiveScrollView
                uniqueKey="test-home-2"
                style={{
                    width: "100%",
                    paddingTop: "75px",
                    paddingLeft: "56px",
                    paddingRight: "56px",
                    paddingBottom: "24px",
                }}
            >
                <Title1
                    style={{
                        marginBottom: "24px",
                    }}
                >
                    {HOME_PAGE_TITLE_1}
                </Title1>
                <FlexColumn gap="small">
                    {KANBAN_BOARDS.map((board) => (
                        <Card key={board.id} onClick={() => {
                            onClickBoard(board);
                        }}>
                            <FlexColumn>
                                <Subtitle1>
                                    {board.title}
                                </Subtitle1>
                            </FlexColumn>
                        </Card>
                    ))}
                </FlexColumn>
            </LiveScrollView>
        </FlexRow>
    );
};
