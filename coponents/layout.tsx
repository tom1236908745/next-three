import Head from "next/head";
import Link from "next/link";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>Next App with three.js</title>
        <meta name="description" content="next.js + three.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href="/">
          <Button variant="contained" color="primary">
            Sample1
          </Button>
        </Link>

        <Link href="/sample2">
          <Button variant="contained" color="primary">
            Sample2
          </Button>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
}