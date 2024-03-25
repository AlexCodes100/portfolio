import React from "react";
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Link } from "@mui/material";
import esen from "../images/esen-logo.png";
import langara from "../images/langara-logo.png";

function Education() {
    const headings = ['University', 'Title', 'Duration', 'Description', 'Website'];
    const esenData = ['ESEN', 'Bachelor of Arts in Economics and Business', '2012 - 2016', 'Escuela Superior de Economia y Negocios (ESEN) is a private university in El Salvador. It was founded in 1995 by a group of Salvadoran businessmen and academics. It is located in Antiguo Cuscatlán, La Libertad.', <Link href="https://www.esen.edu.sv/">www.esen.edu.sv</Link>];
    const langaraData = ['Langara', 'Diploma in Computer Studies', '2023 - 2024', 'Langara College is a public degree-granting college in Vancouver, British Columbia, Canada, which serves approximately 22,000 students annually through its university, career, and continuing studies programs.', <Link href="https://www.langara.ca/">www.langara.ca</Link> ];

    return (
        <Grid container style={{ height: '65vh' }}>
            <Grid item xs={6}>
                <img src={esen} alt="ESEN" style={{ width: '100%', height: '25vh', objectFit: 'contain', backgroundColor: "#5885AF", padding: "20px" }} />
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
                <img src={langara} alt="Langara" style={{ width: '100%', height: '25vh', objectFit: 'contain', backgroundColor: "#5885AF", padding: "20px" }} />
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

export default Education;