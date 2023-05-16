import { FC, memo, useCallback } from "react";
import { FlexColumn } from "../common";
import { useSharedState } from "@microsoft/live-share-react";
import { Input, InputProps, Label, useId } from "@fluentui/react-components";

interface ITextInputProps extends Partial<InputProps> {
    uniqueKey: string;
    label: string;
    placeholder: string;
    initialValue?: string;
}

export const LiveTextInput: FC<ITextInputProps> = memo(({
    uniqueKey,
    initialValue,
    label,
    ...props
}) => {
    const [value, setValue] = useSharedState<string>(
        uniqueKey,
        initialValue || ""
    );
    const idVal = useId(uniqueKey);
    const onChange: InputProps["onChange"] = useCallback((event, data) => {
        event.persist();
        // update the state and reset the caret
        setValue(data.value);
    }, [setValue]);
    return (
        <FlexColumn>
            <Label htmlFor={idVal}>{label}</Label>
            <Input
                id={idVal}
                value={value}
                onChange={onChange}
                {...props}
            />
        </FlexColumn>
    )
});
