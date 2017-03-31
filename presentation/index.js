// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  //Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  //Markdown,
  Quote,
  Slide
  //Table,
  //TableRow,
  //TableHeaderItem,
  //TableItem
  //Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  survivejs: require("../images/survivejs.png"),
  webpackPopularity: require("../images/webpack-popularity.png"),
  webpackMergePopularity: require("../images/webpack-merge-popularity.png")
}, (v) => v.replace("/", ""));

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={slideTransition} transitionDuration={500} theme={theme}>
        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Re-Imagining Webpack
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Me and webpack
          </Heading>
          <List>
            <Appear><ListItem>2013 - Started seeing <b>webpack.config.js</b> in projects</ListItem></Appear>
            <Appear><ListItem>2013 - Started using <b>react-hot-loader</b> (one of the first users)</ListItem></Appear>
            <Appear><ListItem>2014 October - Commented on Christian {"Alfoni's"} Blog</ListItem></Appear>
            <Appear><ListItem>2015 January - Started developing <b>webpack-cookbook</b> with Christian</ListItem></Appear>
            <Appear><ListItem>2015 March - Started working on <b>SurviveJS</b> book about React and webpack</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Me and webpack
          </Heading>
          <List>
            <Appear><ListItem>2016 February - Self-published on paper</ListItem></Appear>
            <Appear><ListItem>2016 April - Split to two separate books</ListItem></Appear>
            <Appear><ListItem>2016 July - Became a part of <Link href="https://medium.com/webpack/webpack-its-getting-real-92c60fca1db1">webpack core team</Link></ListItem></Appear>
            <Appear><ListItem>2017 January - Webpack 2</ListItem></Appear>
            <Appear><ListItem>2017 March - Webpack book goes to paper</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Why webpack became popular?
          </Heading>
          <List>
            <Appear><ListItem>2014 - Noticed by Instagram (Pete Hunt)</ListItem></Appear>
            <Appear><ListItem>2014 - Noticed by React community</ListItem></Appear>
            <Appear><ListItem>2016 - Angular (in official docs)</ListItem></Appear>
            <Appear><ListItem>Features: <b>code splitting</b>, Hot Module Replacement, and a lot more</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <code>import()</code>
          </Heading>
          <CodePane lang="javascript">
            {`import('./module').then(
  (module) => {...}
).catch(
  (error) => {...}
);`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Webpack
          </Heading>
          <Image src={images.webpackPopularity} margin="40px auto" height="364px" />
          <Layout>
            <Link href="https://npm-stat.com/charts.html?package=webpack&from=2014-03-19&to=2017-03-19">npm-stat.com</Link>
          </Layout>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://www.npmjs.com/package/webpack-merge">webpack-merge</Link>
          </Heading>
          <Image src={images.webpackMergePopularity} margin="40px auto" height="364px" />
          <Layout>
            <Link href="https://npm-stat.com/charts.html?package=webpack-merge&from=2015-06-19&to=2017-03-19">npm-stat.com</Link>
          </Layout>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Documentation
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <iframe
            width="100%"
            height="600px"
            src="https://webpack.github.io/"
          />
        </Slide>

        <Slide transition={slideTransition} bgColor="black">
          <BlockQuote>
            <Quote>Webpack documentation sucks</Quote>
            <Cite>R. Ando</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={slideTransition}>
          <iframe
            width="100%"
            height="600px"
            src="https://webpack.js.org/"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Re-inventing Documentation
          </Heading>
          <List>
            <Appear><ListItem>2016 June - Development of <Link href="https://github.com/webpack/webpack.js.org">the new site</Link> begins</ListItem></Appear>
            <Appear><ListItem>2016 December - New documentation MVP completed</ListItem></Appear>
            <Appear><ListItem>Re-designed information architecture on top of <Link href="https://antwar.js.org/">Antwar</Link></ListItem></Appear>
            <Appear><ListItem>Community rallied around styling and content</ListItem></Appear>
            <Appear><ListItem>Heavy focus on process (linting, removing human effort)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Re-inventing Documentation
          </Heading>
          <List>
            <Appear><ListItem>Hundreds of contributors since the beginning (over 700 PRs)</ListItem></Appear>
            <Appear><ListItem>Hosted on top of GitHub Pages, automated deploys, heavy linting (links included)</ListItem></Appear>
            <Appear><ListItem>Plugin/loader readme files are hosted through the site</ListItem></Appear>
            <Appear><ListItem>Edits possible through GitHub UI (edit buttons at the site)</ListItem></Appear>
            <Appear><ListItem><Link href="https://webpack.js.org/vote/">Vote to shape development</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <iframe
            width="100%"
            height="600px"
            src="https://antwar.js.org/"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            From one developer to many
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Scaling a Project
          </Heading>
          <List>
            <Appear><ListItem>2012 March - Tobias starts developing webpack due to a rejected PR (<b>code splitting</b>)</ListItem></Appear>
            <Appear><ListItem>2016 July - <Link href="https://medium.com/webpack/webpack-its-getting-real-92c60fca1db1">webpack core team</Link> was established</ListItem></Appear>
            <Appear><ListItem>2016 October - <Link href="https://opencollective.com/webpack">Webpack open collective</Link> goes live. Joined <Link href="https://js.foundation/">JS Foundation</Link> as well and started a secret Slack for core discussions.</ListItem></Appear>
            <Appear><ListItem>2017 January - Established <Link href="https://github.com/webpack-contrib">webpack-contrib</Link></ListItem></Appear>
            <Appear><ListItem>2017 March - Open Collective has reached $80k annually</ListItem></Appear>
            <Appear><ListItem>2017 April - Tobias goes full-time on webpack</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            webpack-contrib
          </Heading>
          <List>
            <Appear><ListItem>Separate effort from the core - Focus on third party packages</ListItem></Appear>
            <Appear><ListItem>Started from three packages, grew to 40+ fast</ListItem></Appear>
            <Appear><ListItem>Headed by a small but effective team</ListItem></Appear>
            <Appear><ListItem>Years of tech debt to manage</ListItem></Appear>
            <Appear><ListItem><Link href="https://github.com/webpack-contrib/webpack-defaults">webpack-defaults</Link> allows us to get there</ListItem></Appear>
            <Appear><ListItem>Automation and discipline are needed (faster velocity, higher quality work)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            webpack-defaults
          </Heading>
          <List>
            <Appear><ListItem><b>npm install webpack-defaults --save-dev</b></ListItem></Appear>
            <Appear><ListItem><b>npm run webpack-defaults</b></ListItem></Appear>
            <Appear><ListItem>To update, treat as a npm package and run again</ListItem></Appear>
            <Appear><ListItem>Powered by <Link href="https://github.com/sapegin/mrm">mrm</Link></ListItem></Appear>
            <Appear><ListItem>Think it as <b>a migration tool</b> for project configuration</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Future
          </Heading>
          <List>
            <Appear><ListItem>Push <b>webpack-defaults</b> to all contrib projects</ListItem></Appear>
            <Appear><ListItem>Enable higher quality with less effort</ListItem></Appear>
            <Appear><ListItem>Decrease the demand for support by improving webpack</ListItem></Appear>
            <Appear><ListItem>Low hanging fruits in error reporting and debugging</ListItem></Appear>
            <Appear><ListItem>Parallelism, WebAssembly, features community wants</ListItem></Appear>
            <Appear><ListItem>Better funding to enable more work</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://survivejs.com/webpack/">
            <Heading size={1}>
              SurviveJS - Webpack
            </Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="524px"/>
        </Slide>

        <Slide transition={slideTransition} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made in Finland by
          </Heading>
          <Link href="https://twitter.com/bebraw">
            <Heading caps fit size={2} textColor="secondary">
              Juho Vepsäläinen
            </Heading>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
