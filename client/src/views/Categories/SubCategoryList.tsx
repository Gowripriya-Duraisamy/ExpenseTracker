import { Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";

import classes from "./category.module.css";

export interface SubCategoryList {
  id: number;
  name: string;
  type: string;
  image: string
}

interface SubCategoryListProps {
  data: SubCategoryList[];
  handleSelectedCategory: (category: SubCategoryList) => void
}

const SubCategory: FC<SubCategoryListProps> = ({ data, handleSelectedCategory }) => {
  return (
    <>
      {data.map((datum, index) => {
        return (
          <Card key={index} className={classes.subCard} onClick={() => {
            handleSelectedCategory(datum);
          }}>
            <CardContent className={classes.subCardContent}>
              <Typography>{datum.name}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default SubCategory;
