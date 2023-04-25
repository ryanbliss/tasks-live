import { FC, ReactNode, createContext, useContext } from "react";

interface INavigationProviderProps {
    navigate: (route: string) => void;
    children?: ReactNode;
}

export const NavigationProvider: FC<INavigationProviderProps> = ({
    children,
    navigate,
}) => {
    return (
        <NavigationContext.Provider
            value={{
                navigate,
            }}
        >
            {children}
        </NavigationContext.Provider>
    );
};

interface INavigationContext {
    navigate: (route: string) => void;
}

const NavigationContext = createContext<INavigationContext>(
    {} as INavigationContext
);
export const useNavigationContext = (): INavigationContext =>
    useContext(NavigationContext);
