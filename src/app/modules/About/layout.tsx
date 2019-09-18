import React from 'react';
import { Grid, Box, Container, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Header } from 'app/components/surfaces/Header';
import { Footer } from 'app/components/surfaces/Footer';
import { PageContainer } from 'app/modules/common/PageContainer';
import { ModuleHeader } from 'app/modules/common/ModuleHeader';

const Paragraph = styled.p`
  padding-bottom: 8px;
`;

const Section = styled.section`
  //Calculating for clarity, every section ends with a paragraph as child
  margin-bottom: calc(60px - 8px);
`;

export const AboutLayout = () => {
  return (
    <PageContainer footer>
      <ModuleHeader title="Using the IATI Datastore" />

      <Box width="100%" height="40px" />
      <Container maxWidth="lg" style={{ paddingBottom: '8px' }}>
        {/* Appbar component needs a refactor, therefore not in this PR.*/}
        {/* INTRODUCTION*/}
        <Section>
          
          <Paragraph>
            <Typography variant="body1">
              The IATI Datastore enables you to output data in four different
              formats (JSON, XML, CSV and XLS) for various purposes.
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              The IATI Datastore holds all activity data published on
              development and humanitarian activities available on the IATI
              Registry. The Datastore is primarily aimed at users who have
              technical expertise in manipulating data. It lets you query the
              content of all the original IATI XML files in a single place. In
              addition to XML, the IATI data can be downloaded in a spreadsheet
              (CSV) or JSON format.
            </Typography>
          </Paragraph>
        </Section>

        {/* what can be accessed? */}
        <Section>
          <Typography variant="h6" style={{ paddingBottom: '16px' }}>
            What can I do with the IATI Datastore?
          </Typography>
          <Paragraph>
            <Typography variant="body1">
              This section explains how the current Datastore can be used - it
              is aimed at more technically able users who are familiar with
              using APIs.
            </Typography>
          </Paragraph>
        </Section>

        {/* Testing the new Datastore API (19 Aug - 18 Sept) */}
        <Section>
          <Typography variant="h6" style={{ paddingBottom: '16px' }}>
            Making a query to the IATI Datastore.
          </Typography>
          <Paragraph>
            <Typography variant="body1">
              Depending on what information you are looking for and what
              questions you want to answer with IATI data, you can build queries
              and set up filters to get the details you need.
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              To access all IATI datasets, for example, you can run a simple API
              query:
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              If you have more specific questions you want to answer with IATI
              data, you can set up a filter for a specific IATI element. For
              instance, if you are looking for IATI activities taking place in
              Uganda (UG), you can run this API query:
            </Typography>
          </Paragraph>

          <Paragraph>
            <Typography variant="body1">
              For examples of more detailed queries and filters, such as
              searching for invalid data that the datastore cannot process, see
              IATI Datastore.
            </Typography>
          </Paragraph>
        </Section>

        {/* What will happen after the Datastore testing phase?  */}
        <Section>
          <Typography variant="h6" style={{ paddingBottom: '16px' }}>
            In what formats can I output the IATI data?
          </Typography>
          <Paragraph>
            <Typography variant="body1">
              The benefit of the IATI Datastore is that you can convert the
              original IATI data, provided in XML format, into three more
              formats - JSON, CSV and XLS. All data in the Datastore is filtered
              and output based on IATI activities. The exception is converting
              the data into CSV format, which also allows you to output it based
              on budgets and transactions.
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">So, you can output:</Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              JSON - The Datastore will convert the published XML to JSON
              format. All the original published information is present in this
              alternative format. The same metadata that is given in the XML
              output is available in the JSON output.
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              XML - The Datastore returns the original activity XML as
              published. This is enhanced with metadata, specifying the version
              of the IATI standard that individual activities were published at,
              as well as details of the query result.
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              CSV - The Datastore will convert the published XML data into CSV
              format. Only a subset of published data is present. This format
              can be used to analyse information using spreadsheet software such
              as Microsoft Excel or Libreoffice Calc.
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              XLS - The Datastore will convert the published XML data into XLS
              format. Only a subset of published data is present. This format
              can be used to analyse information using spreadsheet software such
              as Microsoft Excel or Libreoffice Calc.
            </Typography>
          </Paragraph>
          <Paragraph>
            <Typography variant="body1">
              You can select the rows in a CSV or XLS file to represent
              individual activities, budgets or transactions depending on the
              output format you select. Each of these may be expanded by sector
              or country so that percentage splits can be analysed. Less
              technically adept users can use the Datastore CSV Query Builder
              tool to access data in this format.
            </Typography>
          </Paragraph>
        </Section>
      </Container>

      <Footer />
    </PageContainer>
  );
};
