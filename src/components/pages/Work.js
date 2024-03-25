import React from "react";
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Link } from "@mui/material";
import repsa from "../images/REPSA.png";
import milicom from "../images/MILLICOM.png";

function Work() {
    const headings = ['Position', 'Duration', 'Description', 'Website'];
    const esenData = ['IT Manager', '2018 - 2023', 'Repsa is a leading distributor of bearings in El Salvador.', <Link href="https://www.repsa.com.sv/">www.repsa.com.sv</Link>];
    const langaraData = ['IT Manager', '2017 - 2018', 'Milicom is a telecommunications company with offices all around the world.', <Link href="https://www.milicom.com/">www.milicom.com</Link>];

    return (
        <Grid container style={{ height: '65vh' }}>
            <Grid item xs={6}>
                <img src={repsa} alt="REPSA" style={{ width: '100%', height: '25vh', objectFit: 'contain', backgroundColor: "#5885AF", padding: "20px" }} />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableBody>
                            {headings.map((heading, i) => (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row">{heading}</TableCell>
                                    <TableCell>{esenData[i]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={6}>
                <img src={milicom} alt="Milicom" style={{ width: '100%', height: '25vh', objectFit: 'contain', backgroundColor: "#5885AF", padding: "20px" }} />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableBody>
                            {headings.map((heading, i) => (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row">{heading}</TableCell>
                                    <TableCell>{langaraData[i]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

export default Work;