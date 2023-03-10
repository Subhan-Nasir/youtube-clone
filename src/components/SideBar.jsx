import React from 'react'
import { Button, Stack } from '@mui/material';
import { categories } from '../utils/constants';



const SideBar = ({selectedCategory, setSelectedCategory}) => {
  return (

    <Stack direction="row" sx={{marginTop:"10px",overflowY: "auto", height: {sx:"auto", md:"95%"}, flexDirection: {md:"column"}, zIndex:2}}>
        {categories.map((category)=>(
            <Button 
                className='category-btn'
                onClick={ () => setSelectedCategory(category.name) }
                style={{ background: category.name === selectedCategory && "#FC1503", color:"White", justifyContent:"left", borderRadius:"25px" }}
                
                
                key={category.name}
            >
                <span style={{color: category.name === selectedCategory ? "white": "red", marginRight: "15px"}}>{category.icon}</span>
                <span style={{opacity: category.name === selectedCategory ? "1" : "0.8"}}>{category.name}</span>
            </Button>
        ))}
    </Stack>


  )
}

export default SideBar