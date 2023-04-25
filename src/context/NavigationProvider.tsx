import { FC, ReactNode, createContext, useContext } from "react";

interface INavigationProviderProps {
    navigate: (route: string) => void;
    width: number;
    height: number;
    children?: ReactNode;
}

export const NavigationProvider: FC<INavigationProviderProps> = ({
    children,
    width,
    height,
    navigate,
}) => {
    return (
        <NavigationContext.Provider
            value={{
                navigate,
                width,
                height,
            }}
        >
            {children}
        </NavigationContext.Provider>
    );
};

interface INavigationContext {
    navigate: (route: string) => void;
    width: number;
    height: number;
}

const NavigationContext = createContext<INavigationContext>(
    {} as INavigationContext
);
export const useNavigationContext = (): INavigationContext =>
    useContext(NavigationContext);
