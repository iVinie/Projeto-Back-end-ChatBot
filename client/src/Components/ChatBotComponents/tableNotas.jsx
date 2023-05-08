import React, { useState, useEffect } from "react"
import Axios from "axios"
import { useParams } from 'react-router-dom'
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material"
function TabelaDeNotas() {
    let { cpf } = useParams()
    let { isAdmin } = useParams( )
    const [notas, setNotas] = useState([])
    useEffect(() => {
        Axios.post("http://localhost:3001/notas", {
            cpf: cpf,
            isAdmin: isAdmin
        }).then((response) => {
            setNotas(response.data);
        });
    }, []);
    return (
        <Paper style={{ background: 'transparent',
        width:'94%'}} >
            <Table>
                <TableHead>
                    <TableRow >
                        <TableCell align='center' style={{color: '#c5c5c5', fontSize:'17px' }}>Nome</TableCell>
                        <TableCell align='center' style={{color: '#c5c5c5', fontSize:'17px' }}>CPF</TableCell>
                        <TableCell align='center' style={{color: '#c5c5c5', fontSize:'17px' }}>Disciplina</TableCell>
                        <TableCell align='center' style={{color: '#c5c5c5', fontSize:'17px' }}>Nota</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {notas.map((nota) => (
                        <TableRow key={nota.id}>
                            <TableCell align='center' style={{color: '#c5c5c5', fontSize:'17px' }}>{nota.user_nome}</TableCell>
                            <TableCell align='center' style={{color: '#c5c5c5', fontSize:'17px' }}>{nota.user_cpf}</TableCell>
                            <TableCell align='center' style={{color: '#c5c5c5', fontSize:'17px' }}>{nota.disciplina_nome}</TableCell>
                            <TableCell align='center' style={{color: '#c5c5c5', fontSize:'17px' }} >{nota.valor}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
export default TabelaDeNotas;
