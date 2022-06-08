// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui


// ----------------------------------------------------------------------

type IProps = {
    name: string;
};
type Props = IProps & React.HTMLProps<HTMLInputElement>;


export default function RHFTextField({ name, ...other }: Props) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <input type='text' {...field}   {...other} />
            )}
        />
    );
}
