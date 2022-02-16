import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import { margin } from "@mui/system";
import { useForm } from "react-hook-form";
const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmitForm = (event, data) => {
        //event.preventDefault();
        console.log(data);
    }
    const TextDiv = styled('div')(
        {
            margin: 8
        }
    )
    return (
        <>
            <form onSubmit={onSubmitForm}>
                <div>
                    <TextDiv>
                        <TextField label='FirstName' {...register("FirstName")} />
                    </TextDiv>
                    <TextDiv>
                        <TextField label='LastName' {...register("LastName")} />
                    </TextDiv>
                    <TextDiv>
                        <TextField label='Username'{...register("Username")} type='text' />
                    </TextDiv>
                    <TextDiv>
                        <TextField label='Password' {...register("Password")} type='password' />
                    </TextDiv>
                    <TextDiv>
                        <span style={{ padding: 2 }}>
                            <Button type="submit" variant="contained">Submit</Button>
                        </span>
                        <span style={{ padding: 2 }}>
                            <Button variant="contained">Cancel</Button>
                        </span>
                    </TextDiv>
                </div>
            </form>
        </>
    );
}
export default Signup;