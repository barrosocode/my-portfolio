"use client";

// Imports
import {storeContact} from "@/app/services/api";
import {Button, Card, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, {ChangeEvent, useState} from "react";

// Component
const Contato = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [msg, setMsg] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const params = {
            name,
            email,
            phone,
            msg,
        };
        storeContact(params);
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <Grid container padding={5} rowSpacing={2}>
                    <Grid container spacing={5} style={{minWidth: "100%"}}>
                        <Grid size={"grow"}>
                            <Typography variant={"h5"}>Nome:</Typography>
                            <TextField value={name} variant="outlined" fullWidth onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} style={{minWidth: "100%"}}>
                        <Grid size={"grow"}>
                            <Typography variant={"h5"}>Email:</Typography>
                            <TextField value={email} variant="outlined" fullWidth onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} style={{minWidth: "100%"}}>
                        <Grid size={"grow"}>
                            <Typography variant={"h5"}>Telefone:</Typography>
                            <TextField value={phone} variant="outlined" fullWidth onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} style={{minWidth: "100%"}}>
                        <Grid size={"grow"}>
                            <Typography variant={"h5"}>Mensagem:</Typography>
                            <TextField value={msg} multiline rows={5} variant="outlined" fullWidth onChange={(e: ChangeEvent<HTMLInputElement>) => setMsg(e.target.value)} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}}>
                        <Grid>
                            <Button variant="contained" fullWidth type="submit">
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Card>
    );
};

// Export
export default Contato;
