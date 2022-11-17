import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { Close, ChevronRight, Search, Done } from "@mui/icons-material/";
import {
  ChangeEvent,
  FC,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";

import classes from "./transaction.module.css";
import { EntireCategrories } from "../../constants";
import { CategoryAttributes } from "../Categories/types";

interface CategoryProps {
  selectedCategory: CategoryAttributes;
  handleSelection: (value: CategoryAttributes) => void;
}

const Category: FC<CategoryProps> = ({ handleSelection, selectedCategory }) => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("Expense");
  const [categoryList, setCategoryList] = useState<CategoryAttributes[]>([]);

  const handleDialog = () => {
    setOpen((prevState) => !prevState);
  };

  const updateCategories = useCallback(() => {
    const newCategories = EntireCategrories.filter(
      (category) => category.subType === tab
    );
    setCategoryList(newCategories);
  }, [tab]);

  useEffect(() => {
    updateCategories();
  }, [tab, updateCategories]);

  const handleTabChange = (event: SyntheticEvent, value: string) => {
    setTab(value);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const newCategories = EntireCategrories.filter(
      (category) =>
        category.subType === tab &&
        category.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setCategoryList(newCategories);
  };

  return (
    <>
      <Grid className={classes.containerBox} item xs={3.8}>
        <label className={classes.label}>Category</label>
        <TextField
          className={classes.field}
          variant="standard"
          value={selectedCategory.name}
          onClick={handleDialog}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <Box className={classes.questionBox}>?</Box>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <ChevronRight />
                </IconButton>
              </InputAdornment>
            ),
          }}
          placeholder="Select Category"
        />
      </Grid>
      <Dialog fullWidth maxWidth="xs" open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <IconButton
            aria-label="close"
            onClick={handleDialog}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
          <Typography className={classes.categoryHeader}>
            Select Category
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box className={classes.searchBox}>
            <TextField
              variant="standard"
              placeholder="search"
              onChange={handleSearch}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Tabs value={tab} onChange={handleTabChange} centered>
            <Tab label="DEBT/LOAN" value="Debt/Loan" />
            <Tab label="EXPENSE" value="Expense" />
            <Tab label="INCOME" value="Income" />
          </Tabs>
          <Box className={classes.box}>
            {categoryList.map((listItem, index) => {
              const categorySelected = selectedCategory.name === listItem.name;
              return (
                <Box
                  className={
                    categorySelected
                      ? classes.categoryBoxSelected
                      : classes.categoryBox
                  }
                  key={index}
                  onClick={() => {
                    handleSelection(listItem);
                    handleDialog();
                  }}
                >
                  <Grid display="flex" justifyContent={"space-between"}>
                    <Typography
                      display="inline"
                      className={classes.categoryName}
                    >
                      {listItem.name}
                    </Typography>
                    {categorySelected && (
                      <IconButton>
                        <Done sx={{ color: "#5dfa7f" }} />
                      </IconButton>
                    )}
                  </Grid>
                  {categoryList.length - 1 > index && (
                    <Divider className={classes.categoryDivider} />
                  )}
                </Box>
              );
            })}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Category;
