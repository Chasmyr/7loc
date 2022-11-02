import { Container, CssBaseline, Table, TableBody, TableCell, TableHead, Box, TableContainer, TableRow, Button } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import Data from '../data/Fixture.json'

const Shop = () => {

    const [searchResults, setSearchResults] = useState([])
    const [cart, setCart] = useState([])
    const [isCart, setIsCart] = useState(false)

    const itemsList = []
    Data.map((shop) => {
        shop.items.map((items) => {
            itemsList.push(items)
        })
    })
    
    console.log(cart)

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
                
                <Box sx={{minHeight: 350, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    {isCart ?
                        <>
                            <h1>panier</h1>
                            <TableContainer>
                                <Table sx={{ minWidth: {
                                                    xs: 250,
                                                    sm: 350,
                                                    md: 550,
                                                    lg: 650,
                                                    xl: 650}
                                            }}>
                                    <TableHead sx={{ 
                                    minWidth: {xs: 250, sm: 350, md: 550, lg: 650, xl: 650} }}>
                                        <TableCell>Item</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Quantité</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableHead>
                                    <TableBody>
                                        {cart.map((item, index) => {
                                            return (
                                                <TableRow>
                                                    <TableCell>{item.name}</TableCell>
                                                    <TableCell>{item.price}€</TableCell>
                                                    <TableCell>1</TableCell>
                                                    <TableCell><Button variant="outlined" color="success">+</Button><Button variant="outlined" color="error">-</Button></TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Button variant="contained" onClick={() => {setIsCart(false)}} sx={{ mb: 2 }}>Revenir à la boutique</Button>
                        </>
                        :
                        <>
                            <span>Nombre d'objet dans le panier : {cart.length}</span>
                            <SearchBar setSearchResults={setSearchResults} itemsList={itemsList} />
                            <TableContainer>
                                <Table sx={{ 
                                    minWidth: {xs: 250, sm: 350, md: 550, lg: 650, xl: 650} }} aria-label="simple table">
                                    <TableHead>
                                            <TableCell>Item</TableCell>
                                            <TableCell>Shop</TableCell>
                                            <TableCell>Price</TableCell>
                                            <TableCell>Ajout au panier</TableCell>
                                    </TableHead>
                                    <TableBody>
                                        {searchResults?.length ?
                                        // a savoir si on veut afficher qu'un certains nombre sinon tant pis
                                        searchResults.slice(0, 25).map((item, index) => {
                                            return(
                                                <TableRow key={index}>
                                                    <TableCell>{item.name}</TableCell>
                                                    <TableCell>shop</TableCell>
                                                    <TableCell>{item.price}€</TableCell>
                                                    <TableCell>
                                                        <Button variant="outlined" onClick={() => {
                                                             let cartCopy = cart
                                                             setCart(cartCopy => [...cartCopy, item])
                                                        }}>Ajout</Button>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                        :
                                        itemsList.slice(0, 25).map((item, index) => {
                                            return(
                                                <TableRow key={index}>
                                                    <TableCell>{item.name}</TableCell>
                                                    <TableCell>shop</TableCell>
                                                    <TableCell>{item.price}</TableCell>
                                                    <TableCell>
                                                        <Button variant="outlined" onClick={() => {
                                                             let cartCopy = cart
                                                             setCart(cartCopy => [...cartCopy, item])
                                                        }}>Ajout</Button>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Button variant="contained" onClick={() => {setIsCart(true)}} sx={{ mb: 2 }}>Voir votre panier</Button>
                        </>
                    }
                </Box>
            </Box>
        </Container>
    )
}

export default Shop