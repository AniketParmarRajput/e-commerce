import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Frequently = () => {
  // Using JavaScript-friendly useState without type annotations
  const [expanded, setExpanded] = useState(false);

  // Event handler without type annotations
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      panel: 'panel1',
      title: 'Convenient User Interface',
      details: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem',
    },
    {
      panel: 'panel2',
      title: 'Lorem ipsum dolor sit amet.',
      details: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem',
    },
    {
      panel: 'panel3',
      title: 'Aliquid esse atque eveniet fugiat ullam',
      details: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem',
    },
    {
      panel: 'panel4',
      title: 'Tenetur, facilis neque error earum facere exercitationem!',
      details: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem.',
    },
    {
      panel: 'panel5',
      title: 'Perspiciatis ut ipsa cum molestias quaerat laborum.',
      details: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem',
    }
  ];

  return (
    <section className='m-20 h-screen w-11/12 space-y-7'>
      <div className='space-y-4'>
        <h1 className='text-base font-bold'>Below are frequently asked questions, you may find the answer for yourself</h1>
        <p className='text-base text-primary-gray3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue. In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat. Donec interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus iaculis euismod dui.
        </p>
      </div>
      <div>
        {faqs.map((faq) => (
          <Accordion expanded={expanded === faq.panel} onChange={handleChange(faq.panel)} key={faq.panel}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${faq.panel}bh-content`}
              id={`${faq.panel}bh-header`}
            >
              <Typography sx={{ width: '100%', height: '100%',flexShrink: 20 }} >{faq.title}</Typography>
            
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='bg-primary-white'>{faq.details}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Frequently;
