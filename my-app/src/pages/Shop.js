import { Container, CssBaseline, Table, TableBody, TableCell, TableHead, Box, TableContainer, TableRow } from "@mui/material"
import { useState } from "react"
import SearchBar from "../components/SearchBar"
import Data from '../data/Fixture.json'

const Shop = () => {

    const [searchResults, setSearchResults] = useState([])

    const itemsList = []
    Data.map((shop) => {
        shop.items.map((items) => {
            itemsList.push(items)
        })
    })
    console.log("rendue")

    return (
        <Container component="main">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 18,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: 5
            }} >
                {/* ajouter le loader et le skeleton ici ainsi qu'une barre de recherche qui actualise la liste de produit */}
                <SearchBar setSearchResults={setSearchResults} itemsList={itemsList} />
                <Box sx={{minHeight: 350, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <TableContainer>
                        <Table sx={{ 
                            minWidth: {xs: 250, sm: 350, md: 550, lg: 650, xl: 650} }} aria-label="simple table">
                                    <TableHead>
                                            <TableCell>Item</TableCell>
                                            <TableCell>Shop</TableCell>
                                            <TableCell>Price</TableCell>
                                            <TableCell>Add</TableCell>
                                    </TableHead>
                                    <TableBody>
                                        {searchResults?.length ?
                                        // a savoir si on veut afficher qu'un certains nombre sinon tant pis
                                        searchResults.slice(0, 25).map((item, index) => {
                                            return(
                                                <TableRow key={index}>
                                                    <TableCell>{item.name}</TableCell>
                                                    <TableCell>shop</TableCell>
                                                    <TableCell>{item.price}</TableCell>
                                                    <TableCell>btn</TableCell>
                                                </TableRow>
                                            )
                                        })
                                        :
                                        itemsList.map((item, index) => {
                                            return(
                                                <TableRow key={index}>
                                                    <TableCell>{item.name}</TableCell>
                                                    <TableCell>shop</TableCell>
                                                    <TableCell>{item.price}</TableCell>
                                                    <TableCell>btn</TableCell>
                                                </TableRow>
                                            )
                                        })
                                        }
                                    </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Container>
    )
}

export default Shop