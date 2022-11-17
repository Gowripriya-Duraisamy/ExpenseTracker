import { Box, Grid, Typography } from "@mui/material";

import { Categories as CategoryList } from "../../constants";
import SubCategoryList from "./SubCategoryList";
import classes from "./category.module.css";
import Header from "./Header";

const Catagories = () => {
  return (
    <>
    <Header />
    <Grid className={classes.grid}>
      <Box className={classes.box}>
        {CategoryList.map((list, index) => {
          return (
            <Grid key={Math.random() * 100}>
              <Typography  className={classes.categoryHeader}>{list.name}</Typography>
              <SubCategoryList data={list.data} />
            </Grid>
          );
        })}
      </Box>
    </Grid>
    </>
  );
};

export default Catagories;
