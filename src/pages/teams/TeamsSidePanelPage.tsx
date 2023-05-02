import { FC, useCallback } from "react";
import { FlexColumn, FlexItem, FlexRow } from "../../components";
import { Button, Card, Subtitle1, Title3 } from "@fluentui/react-components";
import { meeting } from "@microsoft/teams-js";
import {
    AppRoutes,
    FLUID_ENVIRONMENT,
    HOME_PAGE_TITLE_1,
    IN_TEAMS,
    KANBAN_BOARDS,
} from "../../constants";
import { IKanbanBoard } from "../../interfaces";

export const TeamsSidePanelPage: FC = () => {
    const onClickShareToMeeting = useCallback((board: IKanbanBoard) => {
        const route = `${AppRoutes.teams.children.meeting.children.board.base}?fluidEnv=${FLUID_ENVIRONMENT}`
            .replace(":boardId", board.id);
        const urlToShare = window.location.origin + route;
        if (IN_TEAMS) {
            meeting.shareAppContentToStage((error, result) => {
                if (error) {
                    console.error(error);
                    return;
                }
                if (!result) {
                    console.error("TeamsSidePanelPage: sharing did not succeed");
                    return;
                }
                console.log("TeamsSidePanelPage: sharing success");
            }, urlToShare);
        } else {
            // Testing locally, open in new tab to simulate share to stage
            window.open(urlToShare, "_blank");
        }
    }, []);
    return (
        <FlexColumn gap="medium" fill="view" scroll>
            <FlexItem noShrink>
                <FlexColumn>
                    <Title3
                        style={{
                            marginBottom: "12px",
                        }}
                    >
                        {HOME_PAGE_TITLE_1}
                    </Title3>
                    <FlexColumn gap="small">
                        {KANBAN_BOARDS.map((board) => (
                            <Card
                                key={board.id}
                            >
                                <FlexColumn gap="small">
                                    <Subtitle1>{board.title}</Subtitle1>
                                    <FlexRow>
                                        <Button size="small" onClick={() => {
                                            onClickShareToMeeting(board);
                                        }}>
                                            {"Share in meeting"}
                                        </Button>
                                    </FlexRow>
                                </FlexColumn>
                            </Card>
                        ))}
                    </FlexColumn>
                </FlexColumn>
            </FlexItem>
        </FlexColumn>
    );
};
