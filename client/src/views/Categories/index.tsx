import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

import { Categories as CategoryList } from "../../constants/categories";
import SubCategory, { SubCategoryList } from "./SubCategoryList";
import classes from "./category.module.css";
import Header from "../../components/CommonHeader";
import ReusableIcon from "../../components/ReusableIcon";
import { CATEGORIES } from "../../constants";


const Catagories = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] =
    useState<SubCategoryList | null>();

  const handleSelectedCategory = (category: SubCategoryList) => {
    setSelectedCategory(category);
  };

  const handleArrowAction = () => {
    navigate("/expense/transactions");
  };

  return (
    <>
      <Header name={CATEGORIES} handleArrowAction={handleArrowAction} />
      <Grid container className={classes.outerGrid}>
        <Grid item xs={5} className={classes.grid}>
          <Box className={classes.box}>
            {CategoryList.map((list, index) => {
              return (
                <Grid key={Math.random() * 100}>
                  <Typography className={classes.categoryHeader}>
                    {list.name}
                  </Typography>
                  <SubCategory data={list.data} handleSelectedCategory={handleSelectedCategory} />
                </Grid>
              );
            })}
          </Box>
        </Grid>
        {selectedCategory && (
          <Grid className={classes.detailGrid} item xs={6}>
            <Card>
              <CardContent>
                <Box className={classes.detailsBox}>
                  <IconButton
                    onClick={() => {
                      setSelectedCategory(null);
                    }}
                  >
                    <Close />
                  </IconButton>
                  <Typography className={classes.detailHeader}>
                    Category details
                  </Typography>
                </Box>
                <Divider />
                <Grid container className={classes.listGrid}>
                  <Grid item xs={2}>
                   <ReusableIcon image={selectedCategory.image} className={classes.icon} />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography className={classes.categoryDetailName}>{selectedCategory.name}</Typography>
                    <Typography className={classes.name}>PersonName</Typography>
                    <Typography className={classes.categoryType}>{selectedCategory.type.toUpperCase()}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Catagories;
