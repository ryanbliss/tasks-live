import { IKanbanBoard } from "../interfaces";

const KANBAN_BOARD_1: IKanbanBoard = {
    id: "09ad2da3-b387-48d2-bfe2-51ab85157c03",
    title: "Project board",
    columns: [
        {
            id: "3c228c74-2f5d-4a4e-a661-81a0e0cccb72",
            title: "Proposed",
        },
        {
            id: "dfa2212b-1fef-4fa0-8e62-0001f1ef5985",
            title: "Backlog",
        },
        {
            id: "dcf49641-e238-4d45-95ce-c431fab146e0",
            title: "In progress",
        },
        {
            id: "770c6b92-9149-40cc-8141-5668d6420396",
            title: "Done",
        },
    ],
    tasks: [
        {
            id: "394da360-1b5d-4b89-89bb-e41536e22efd",
            title: "Design new circuit board",
            columnId: "3c228c74-2f5d-4a4e-a661-81a0e0cccb72",
        },
        {
            id: "5580941b-6a57-41ea-af68-326d41d702c2",
            title: "Implement unit tests for control system",
            columnId: "dcf49641-e238-4d45-95ce-c431fab146e0",
        },
        {
            id: "880b8fbd-467e-44ac-8854-f5d7728b954d",
            title: "Develop firmware for embedded system",
            columnId: "dcf49641-e238-4d45-95ce-c431fab146e0",
        },
        {
            id: "b3180b4c-ff9b-43cb-8d81-75fc91183ed9",
            title: "Optimize database query performance",
            columnId: "3c228c74-2f5d-4a4e-a661-81a0e0cccb72",
        },
        {
            id: "565007a7-a059-4223-8bcf-8bdc31135808",
            title: "Refactor legacy codebase",
            columnId: "3c228c74-2f5d-4a4e-a661-81a0e0cccb72",
        },
        {
            id: "b03b68ee-90f8-43bb-8cc9-f29e98789782",
            title: "Upgrade network infrastructure",
            columnId: "3c228c74-2f5d-4a4e-a661-81a0e0cccb72",
        },
        {
            id: "00604dcd-f003-445a-b4a6-74984c4e030d",
            title: "Debug intermittent server crashes",
            columnId: "dfa2212b-1fef-4fa0-8e62-0001f1ef5985",
        },
        {
            id: "11401f69-71b4-4dea-b100-3f4bd513195a",
            title: "Design mobile app UI/UX",
            columnId: "dfa2212b-1fef-4fa0-8e62-0001f1ef5985",
        },
        {
            id: "de632cb0-ee5c-4bc5-b702-e7afacd850f1",
            title: "Integrate third-party API",
            columnId: "dfa2212b-1fef-4fa0-8e62-0001f1ef5985",
        },
        {
            id: "0062d6a2-96a4-4b9b-8b08-e6deb51f6182",
            title: "Set up continuous integration pipeline",
            columnId: "dfa2212b-1fef-4fa0-8e62-0001f1ef5985",
        },
        {
            id: "9eb9142d-47ca-4a34-b78f-7fb5f1d0d0aa",
            title: "Analyze security vulnerabilities",
            columnId: "dfa2212b-1fef-4fa0-8e62-0001f1ef5985",
        },
        {
            id: "bae92672-19b7-4bab-b07e-be072c6b89c7",
            title: "Develop front-end components",
            columnId: "dfa2212b-1fef-4fa0-8e62-0001f1ef5985",
        },
        {
            id: "012ffd18-2b55-4f4e-ba23-84bc4e5e639c",
            title: "Document API endpoints",
            columnId: "770c6b92-9149-40cc-8141-5668d6420396",
        },
        {
            id: "ae616b9b-290d-46d3-9c2c-7cc3f69bd636",
            title: "Create performance benchmarks",
            columnId: "770c6b92-9149-40cc-8141-5668d6420396",
        },
        {
            id: "9ac95559-87f8-41be-a0d9-dc1b5fe283ba",
            title: "Design and implement machine learning algorithm",
            columnId: "770c6b92-9149-40cc-8141-5668d6420396",
        },
        {
            id: "eefce89c-993b-4414-be65-ad9f4e599368",
            title: "Evaluate cloud service providers",
            columnId: "770c6b92-9149-40cc-8141-5668d6420396",
        },
        {
            id: "f2e61b4d-977f-4e88-b6fa-2ad447b50396",
            title: "Automate data backup process",
            columnId: "770c6b92-9149-40cc-8141-5668d6420396",
        },
        {
            id: "434470b3-5c80-4ad5-aeb6-2b9f25d04c5a",
            title: "Perform load testing on web application",
            columnId: "dcf49641-e238-4d45-95ce-c431fab146e0",
        },
        {
            id: "07e3c675-daec-4695-aac4-8bed69f19e94",
            title: "Deploy containerized application",
            columnId: "3c228c74-2f5d-4a4e-a661-81a0e0cccb72",
        },
    ],
};

const KANBAN_BOARD_2: IKanbanBoard = {
    id: "a43ef3f5-3838-4acb-a968-d23bb3bb9991",
    title: "Idea brainstorming",
    columns: [
        {
            id: "253c2182-ece2-411d-b3d2-251a62c9a230",
            title: "Proposed",
        },
        {
            id: "b3c84842-c48d-4430-8ab6-5f1395390e23",
            title: "Accepted",
        },
    ],
    tasks: [
        {
            id: "2b272b8d-2bda-444d-8077-69ef448bf1d3",
            title: "Explore uses of blockchain technology",
            columnId: "253c2182-ece2-411d-b3d2-251a62c9a230",
        },
        {
            id: "bdfb8273-7d54-4252-82b1-037e63f6028a",
            title: "Investigate IoT integration possibilities",
            columnId: "253c2182-ece2-411d-b3d2-251a62c9a230",
        },
        {
            id: "83796aa3-7990-4da9-9bfb-8c6e9d6c3270",
            title: "Research AI applications in customer support",
            columnId: "b3c84842-c48d-4430-8ab6-5f1395390e23",
        },
        {
            id: "38cdd8e9-8f92-47d7-bd12-54d4da4226b6",
            title: "Brainstorm alternative power sources",
            columnId: "b3c84842-c48d-4430-8ab6-5f1395390e23",
        },
        {
            id: "55cc145f-e14b-4288-9d86-25f4bfdfd4d1",
            title: "Develop virtual reality training modules",
            columnId: "253c2182-ece2-411d-b3d2-251a62c9a230",
        },
        {
            id: "ffdaf61a-ba99-4fb7-9e36-ff1844cb2218",
            title: "Evaluate potential robotic process automation",
            columnId: "253c2182-ece2-411d-b3d2-251a62c9a230",
        },
        {
            id: "bf11317c-11b2-4c29-80a9-66795d1fa48f",
            title: "Design gamification elements for user engagement",
            columnId: "253c2182-ece2-411d-b3d2-251a62c9a230",
        },
        {
            id: "fad64541-408e-41a8-866c-02ed33c036c9",
            title: "Discover new applications for 3D printing",
            columnId: "253c2182-ece2-411d-b3d2-251a62c9a230",
        },
        {
            id: "57b38c9f-6d8b-404d-8b81-db2a0279147d",
            title: "Identify ways to improve user privacy",
            columnId: "253c2182-ece2-411d-b3d2-251a62c9a230",
        },
        {
            id: "b2ac6cd7-6279-42c2-8645-7b1cd0f436b9",
            title: "Examine sustainability solutions in engineering",
            columnId: "253c2182-ece2-411d-b3d2-251a62c9a230",
        },
        {
            id: "bd60f499-046a-4fde-9402-d95bb521b389",
            title: "Assess opportunities for data visualization",
            columnId: "253c2182-ece2-411d-b3d2-251a62c9a230",
        },
        {
            id: "196b15cc-af58-4504-aa7b-a8a8589226c6",
            title: "Propose new digital marketing strategies",
            columnId: "253c2182-ece2-411d-b3d2-251a62c9a230",
        },
        {
            id: "418dd01d-07c7-4406-8e47-691f37fd2bd5",
            title: "Analyze potential applications of edge computing",
            columnId: "253c2182-ece2-411d-b3d2-251a62c9a230",
        },
        {
            id: "9ea5604b-dc27-4a0e-b989-4dd56e245d43",
            title: "Discuss improvements in software quality assurance",
            columnId: "253c2182-ece2-411d-b3d2-251a62c9a230",
        },
        {
            id: "db6db2c4-1348-4d82-bff4-304510607b7f",
            title: "Brainstorm AR/VR applications in healthcare",
            columnId: "253c2182-ece2-411d-b3d2-251a62c9a230",
        },
    ],
};

export const KANBAN_BOARDS = [KANBAN_BOARD_1, KANBAN_BOARD_2];
