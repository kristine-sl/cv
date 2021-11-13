import { Divider, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FormattedMessage } from 'react-intl';

const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

interface Article {
  type: string;
  title: string;
  link?: string;
  startDate: string;
  endDate?: string;
  source?: string;
  description: string;
}

interface ArticlesProps {
  data: Article[];
}

export const Articles = ({ data }: ArticlesProps) => {
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
            <Typography variant="subtitle2" component="span">
              <FormattedMessage id={article.type} />
            </Typography>

            {article.link ? (
              <Link
                href={article.link}
                variant="h3"
                sx={{ my: 1, display: 'block' }}
                color="text.primary"
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
            >
              <Box sx={{ whiteSpace: 'nowrap', display: 'flex' }}>
                {capitalizeFirstLetter(
                  new Date(article.startDate).toLocaleDateString(
                    locale,
                    dateOptions
                  )
                )}
                {article.endDate && (
                  <>
                    <Box sx={{ mx: 0.5 }}>-</Box>
                    {capitalizeFirstLetter(
                      new Date(article.endDate).toLocaleDateString(
                        locale,
                        dateOptions
                      )
                    )}
                  </>
                )}
              </Box>
              {article.source && (
                <>
                  <Box sx={{ mx: 1 }}>•</Box>
                  <FormattedMessage id={article.source} />
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
};
