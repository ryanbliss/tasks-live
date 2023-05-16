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
            title: "Testing",
        },
        {
            id: "28deea91-d99e-436e-97b7-985b79fccc80",
            title: "Rolling out",
        },
        {
            id: "ba11e126-a4b8-4994-887f-f1273c03d1be",
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
        {
            id: "da728407-542d-446a-a4c1-4aa4ba93c0d4",
            title: "Implement OAuth2 authentication",
            columnId: "dcf49641-e238-4d45-95ce-c431fab146e0",
        },
        {
            id: "a14d88d6-5c9e-4cf1-8c7a-5d5b53c5b5f8",
            title: "Develop backend REST API",
            columnId: "dcf49641-e238-4d45-95ce-c431fab146e0",
        },
        {
            id: "f63a6b97-bc25-4f98-a1b3-63f74c5276f8",
            title: "Refactor CSS stylesheets",
            columnId: "3c228c74-2f5d-4a4e-a661-81a0e0cccb72",
        },
        {
            id: "0f4d4c03-1ec4-4b4d-a848-f9829429e5f5",
            title: "Create automated test scripts",
            columnId: "3c228c74-2f5d-4a4e-a661-81a0e0cccb72",
        },
        {
            id: "240f7f63-6dc9-4e85-b98c-03b3a3b45208",
            title: "Implement web sockets for real-time communication",
            columnId: "dcf49641-e238-4d45-95ce-c431fab146e0",
        },
        {
            id: "76e77d8d-9fcb-4d6e-a699-43d8d1debf36",
            title: "Optimize button rendering performance",
            columnId: "3c228c74-2f5d-4a4e-a661-81a0e0cccb72",
        },
        {
            id: "3a3b266c-1e8b-4372-8822-eb12cf51f843",
            title: "Implement A/B testing",
            columnId: "dfa2212b-1fef-4fa0-8e62-0001f1ef5985",
        },
        {
            id: "b5a5bce3-c3cf-4e6b-9e22-d2ba4e16e327",
            title: "Develop data migration plan",
            columnId: "770c6b92-9149-40cc-8141-5668d6420396",
        },
        {
            id: "4c4e4b4d-4e27-4a2e-92f1-3f3d52c9cf2e",
            title: "Integrate payment gateway",
            columnId: "dfa2212b-1fef-4fa0-8e62-0001f1ef5985",
        },
        {
            id: "38f04b77-7a2a-42d8-a7a1-32d56e7d37b8",
            title: "Write user documentation",
            columnId: "770c6b92-9149-40cc-8141-5668d6420396",
        },
        {
            id: "1e9d8c07-442-449a-82fc-550d8d8e27b1",
            title: "Develop cross-platform mobile app",
            columnId: "dfa2212b-1fef-4fa0-8e62-0001f1ef5985",
        },
        {
            id: "a6e5f651-41ed-4f3e-94a6-510b5387dfe4",
            title: "Refactor data model",
            columnId: "770c6b92-9149-40cc-8141-5668d6420396",
        },
        {
            id: "238b3a3b-406e-44f6-ae33-7dcad0c4e256",
            title: "Set up content delivery network",
            columnId: "3c228c74-2f5d-4a4e-a661-81a0e0cccb72",
        },
        {
            id: "24a2d2eb-9e20-4696-a59e-839d874a0e8d",
            title: "Create user acceptance test plan",
            columnId: "dcf49641-e238-4d45-95ce-c431fab146e0",
        },
        {
            id: "de9a202d-3f0a-4f69-bb1a-b5553a5c6e74",
            title: "Implement geolocation tracking",
            columnId: "dfa2212b-1fef-4fa0-8e62-0001f1ef5985",
        },
        {
            id: "5be6e8d6-c714-40ab-93a1-67c1d50a2c17",
            title: "Design and implement RESTful API",
            columnId: "dcf49641-e238-4d45-95ce-c431fab146e0",
        },
        {
            id: "2c7f904e-508d-4e89-8ce7-7ccdf238f48e",
            title: "Create wireframes for new feature",
            columnId: "dfa2212b-1fef-4fa0-8e62-0001f1ef5985",
        },
        {
            id: "1b47d463-75da-4a71-9a9a-839d46b314c7",
            title: "Refactor database schema",
            columnId: "770c6b92-9149-40cc-8141-5668d6420396",
        },
        {
            id: "e38f9967-7d1a-48d9-8791-2028810f7e74",
            title: "Create user personas",
            columnId: "dfa2212b-1fef-4fa0-8e62-0001f1ef5985",
        },
        {
            id: "66b8c9c9-6f5c-4c38-bb5d-0475fbad4ef4",
            title: "Optimize image rendering performance",
            columnId: "3c228c74-2f5d-4a4e-a661-81a0e0cccb72",
        },
        {
            id: "c09d12e8-98d2-4cd5-b77f-d72bf0d9a9e1",
            title: "Create system architecture diagram",
            columnId: "dcf49641-e238-4d45-95ce-c431fab146e0",
        },
        {
            id: "1a1a81e7-c15d-4c5a-b97e-5ce2f79e4b4d",
            title: "Refactor authentication module",
            columnId: "3c228c74-2f5d-4a4e-a661-81a0e0cccb72",
        },
        {
            id: "9648616a-7dcf-4276-b02c-338b74a98a7f",
            title: "Create integration test plan",
            columnId: "dcf49641-e238-4d45-95ce-c431fab146e0",
        },
        {
            id: "e28fcb23-6db9-46d1-84b9-6e41c6b8d285",
            title: "Optimize page rendering performance",
            columnId: "3c228c74-2f5d-4a4e-a661-81a0e0cccb72",
        },
        {
            id: "4e12f4c1-53f8-4bda-8cd4-97cbb2c4b3f4",
            title: "Implement push notifications",
            columnId: "dfa2212b-1fef-4fa0-8e62-0001f1ef5985",
        },
        {
            id: "d2e6f862-6f92-4e45-86f1-84c44b568938",
            title: "Write automated deployment script",
            columnId: "3c228c74-2f5d-4a4e-a661-81a0e0cccb72",
        },
        {
            id: "da88d8da-1e20-41c1-af62-019660a8a9cb",
            title: "Create user feedback survey",
            columnId: "dfa2212b-1fef-4fa0-8e62-0001f1ef5985",
        },
        {
            id: "ec121a5a-d81b-44f3-9cc9-19304ba37d81",
            title: "Optimize video rendering performance",
            columnId: "3c228c74-2f5d-4a4e-a661-81a0e0cccb72",
        },
        {
            id: "bb87cafa-20ce-40b7-af63-79fc69e55f2a",
            title: "Create user acceptance test scripts",
            columnId: "dcf49641-e238-4d45-95ce-c431fab146e0",
        },
        {
            id: "f3563109-7209-4b2c-a25c-53f92c8a85f3",
            title: "Implement load balancer for web servers",
            columnId: "3c228c74-2f5d-4a4e-a661-81a0e0cccb72",
        },
        {
            id: "c72f5847-82f0-4397-82c5-cfa68543e8ce",
            title: "Design and implement chat feature",
            columnId: "dfa2212b-1fef-4fa0-8e62-0001f1ef5985",
        },
        {
            "id": "1f4af538-8a05-4d69-bd62-7f2c4fa8d22c",
            "title": "Refactor user authentication flow",
            "columnId": "28deea91-d99e-436e-97b7-985b79fccc80"
          },
          {
            "id": "be2bae09-b0e8-42c8-96dd-becac9a9cb47",
            "title": "Create user onboarding tutorial",
            "columnId": "28deea91-d99e-436e-97b7-985b79fccc80"
          },
          {
            "id": "fc23ec37-2838-4b4c-af28-d1dd4c0e8dbd",
            "title": "Implement real-time chat feature",
            "columnId": "28deea91-d99e-436e-97b7-985b79fccc80"
          },
          {
            "id": "b7a2d2ab-1d54-4c31-bc57-9a0319fb3c60",
            "title": "Write unit tests for notification system",
            "columnId": "28deea91-d99e-436e-97b7-985b79fccc80"
          },
          {
            "id": "22e2f304-7859-4460-8760-585b44743a0e",
            "title": "Create dashboard for monitoring system metrics",
            "columnId": "28deea91-d99e-436e-97b7-985b79fccc80"
          },
          {
            "id": "0688dd5d-c84d-43de-89a1-2fb919b76d29",
            "title": "Refactor user profile page",
            "columnId": "28deea91-d99e-436e-97b7-985b79fccc80"
          },
          {
            "id": "dd12d178-369e-4a6a-9f15-d7b2af3a4c4e",
            "title": "Create user feedback form",
            "columnId": "28deea91-d99e-436e-97b7-985b79fccc80"
          },
          {
            "id": "690321f8-026f-4a1a-95c5-5e8d5c5b5ed5",
            "title": "Optimize database indexing",
            "columnId": "28deea91-d99e-436e-97b7-985b79fccc80"
          },
          {
            "id": "72ec0f95-df8d-4a90-9de9-1a0a2dcff2b5",
            "title": "Implement user role-based access control",
            "columnId": "28deea91-d99e-436e-97b7-985b79fccc80"
          },
          {
            "id": "9cfecad6-3894-4e26-ae01-6a2d6e70e6c2",
            "title": "Create user survey",
            "columnId": "28deea91-d99e-436e-97b7-985b79fccc80"
          },
          {
            "id": "d95a4c4f-f4de-4e1a-907d-3c1d3a3eb3d3",
            "title": "Create API documentation",
            "columnId": "ba11e126-a4b8-4994-887f-f1273c03d1be"
          },
          {
            "id": "e5d6d44e-9f9c-4c15-a994-01abf8028bb8",
            "title": "Optimize search feature",
            "columnId": "ba11e126-a4b8-4994-887f-f1273c03d1be"
          },
          {
            "id": "3433e48b-697f-4416-bc53-2ca59c7f283d",
            "title": "Implement support for multiple languages",
            "columnId": "ba11e126-a4b8-4994-887f-f1273c03d1be"
          },
          {
            "id": "2f54b25d-4e92-4f4e-85b4-04d4da008b51",
            "title": "Create user feedback form",
            "columnId": "ba11e126-a4b8-4994-887f-f1273c03d1be"
          },
          {
            "id": "e1a45a63-fd31-416c-9fc9-d33a891a68a9",
            "title": "Optimize data processing pipeline",
            "columnId": "ba11e126-a4b8-4994-887f-f1273c03d1be"
          },
          {
            "id": "7d8f231a-3e3c-4aa3-97c8-15e9252c2f77",
            "title": "Create user acceptance test scripts",
            "columnId": "ba11e126-a4b8-4994-887f-f1273c03d1be"
          },
          {
            "id": "be2fa7c4-4f0b-44c1-9dd4-dc1971da3da3",
            "title": "Integrate third-party analytics tool",
            "columnId": "ba11e126-a4b8-4994-887f-f1273c03d1be"
          },
          {
            "id": "43eb400f-f536-4b6e-9546-f7d8a6405f06",
            "title": "Design and implement custom data visualizations",
            "columnId": "ba11e126-a4b8-4994-887f-f1273c03d1be"
          },
          {
            "id": "a54f8912-670e-4615-b1e5-e1b5f5b5f5bf",
            "title": "Create automated testing suite",
            "columnId": "ba11e126-a4b8-4994-887f-f1273c03d1be"
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
