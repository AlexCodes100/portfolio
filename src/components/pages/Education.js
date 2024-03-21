import React from "react";
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";


function Education() {
    const data = [
        { heading: 'Heading 1', info: 'Info 1' },
        { heading: 'Heading 2', info: 'Info 2' },
        { heading: 'Heading 3', info: 'Info 3' },
        { heading: 'Heading 4', info: 'Info 4' },
    ];

    return (
        <Grid container style={{ height: '80vh' }}>
            <Grid item xs={6}>
                <img src="https://via.placeholder.com/800" alt="Image" style={{ width: '100%', height: '50vh', objectFit: 'cover' }} />
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            {data.map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row">{row.heading}</TableCell>
                                    <TableCell>{row.info}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={6}>
                <img src="https://via.placeholder.com/800" alt="Image" style={{ width: '100%', height: '50vh', objectFit: 'cover' }} />
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            {data.map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row">{row.heading}</TableCell>
                                    <TableCell>{row.info}</TableCell>
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