import { Divider, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FormattedMessage } from 'react-intl';

interface Article {
  type: string;
  title: string;
  link?: string;
  date: string;
  publication?: string;
  description: string;
}

interface ArticlesProps {
  data: Article[];
}

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function Articles({ data }: ArticlesProps) {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
  };

  const locale = 'nb-NO';

  return (
    <Grid container direction="column" spacing={2}>
      {data.map((article, index) => (
        <>
          {index !== 0 && <Divider variant="middle" sx={{ mt: 2 }} />}
          <Grid item>
            <Typography variant="subtitle2" component="span" color="secondary">
              <FormattedMessage id={article.type} />
            </Typography>
            {article.link ? (
              <Link
                href={article.link}
                variant="h3"
                sx={{ my: 1, display: 'block' }}
              >
                <FormattedMessage id={article.title} />
              </Link>
            ) : (
              <Typography variant="h3" sx={{ my: 0.5 }}>
                <FormattedMessage id={article.title} />
              </Typography>
            )}
            <Typography
              variant="body2"
              sx={{ mb: 2, display: 'flex', alignItems: 'center' }}
              color="text.secondary"
            >
              {capitalizeFirstLetter(
                new Date(article.date).toLocaleDateString(locale, dateOptions)
              )}
              {article.publication && (
                <>
                  <Box sx={{ mx: 1 }}>•</Box>
                  <FormattedMessage id={article.publication} />
                </>
              )}
            </Typography>
            <Typography variant="body2">
              <FormattedMessage id={article.description} />
            </Typography>
          </Grid>
        </>
      ))}
    </Grid>
  );
}

export default Articles;
