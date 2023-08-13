import React, { Dispatch, SetStateAction } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  Slider,
  Typography,
} from '@mui/material';
import FilterAccordion from './FilterAccordion';
import DownArrow from '../utils/DownArrow';
type filtertypes = {
  [key: string]: any;
};
type props = {
  categories: string[];
  payments: string[];
  paymentFilters: filtertypes;
  categoryFilters: filtertypes;
  slideValue: number[];
  setPaymentFilters: Dispatch<SetStateAction<filtertypes>>;
  setCategoryFilters: Dispatch<SetStateAction<filtertypes>>;
  setSlideValue: React.Dispatch<React.SetStateAction<number[]>>; //Dispatch<SetStateAction<number>>;
};
const FilterBox = ({
  categories,
  payments,
  paymentFilters,
  categoryFilters,
  setPaymentFilters,
  setCategoryFilters,
  setSlideValue,
  slideValue,
}: props) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  function handleSlider(event: any, newValue: number[] | number) {
    setSlideValue(newValue as number[]);
  }
  return (
    <Box
      sx={{
        borderRadius: '20px',
        border: '1px solid #00584A',
        boxSizing: 'border-box',
        padding: { xs: '15px', md: '20px' },
        position: { xs: 'fixed', md: 'relative' },
        // position: 'relative',
        width: { xs: '80vw', sm: '30%', md: '30%', lg: '23%' },
        top: { xs: '180px', md: '0px' },
        left: { xs: '40px', md: '0px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCE7',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            color: '#00584A',
            fontWeight: '600',
            fontSize: '20px',
            borderBottom: '1px solid #00584A',
            width: '100%',
          }}
        >
          Filter
        </Typography>

        <FilterAccordion
          question="Categories"
          panel="panel1"
          handleChange={handleChange}
          expanded={expanded}
          setExpanded={setExpanded}
          answer={categories.map((value, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    name={value}
                    checked={categoryFilters.value}
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 16,
                        color: 'green.darker',
                      },
                    }}
                    onChange={setCategoryFilters}
                  ></Checkbox>
                }
                label={value}
                sx={{
                  fontSize: '14px',
                  color: 'green.darker',
                }}
              />
            );
          })}
        />
        <Box
          sx={{
            width: '100%',
            height: '0.4px',
            backgroundColor: 'green.darker',
            marginTop: '15px',
          }}
        />
        <Typography
          sx={{
            color: 'green.darker',
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '19px',
            letterSpacing: '-0.72px',
            marginTop: '15px',
          }}
        >
          {' '}
          Price
        </Typography>
        <Slider
          sx={{ color: '#00584A' }}
          size="small"
          onChange={handleSlider}
          valueLabelDisplay="auto"
          //   aria-label='Small'
          getAriaValueText={(value) => `${value}/-`}
          getAriaLabel={() => 'Price Range'}
          step={100}
          min={1000}
          max={20000}
          defaultValue={[1000, 2000]}
        />
        <Box
          sx={{
            width: '100%',
            height: '0.4px',
            backgroundColor: 'green.darker',
            marginTop: '15px',
          }}
        />
        <FilterAccordion
          question="Payment"
          panel="panel2"
          handleChange={handleChange}
          expanded={expanded}
          setExpanded={setExpanded}
          answer={payments.map((value, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    name={value}
                    checked={paymentFilters.value}
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 16,
                        color: 'green.darker',
                      },
                    }}
                    onChange={setPaymentFilters}
                  ></Checkbox>
                }
                label={value}
                sx={{
                  fontSize: '14px',
                  color: 'green.darker',
                }}
              />
            );
          })}
        />
        <Box
          sx={{
            width: '100%',
            height: '0.4px',
            backgroundColor: 'green.darker',
            margin: '15px 0',
          }}
        />
      </Box>
    </Box>
  );
};

export default FilterBox;
