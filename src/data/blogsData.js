import {
  Code as CodeIcon,
  Layers as LayersIcon,
  Storage as StorageIcon,
  Speed as SpeedIcon,
} from "@mui/icons-material";

const blogsData = [
  {
    id: 1,
    title: "Optimizing React Render Cycles",
    description:
      "Deep dive into React fibers. Learn how to structure dependency arrays, utilize structural memoization, and profile state propagation paths to prevent layout shifting across dynamic web views.",
    category: "Frontend",
    readTime: "4 min read",
    author: "Mahmoun Ghanem",
    date: "June 15, 2026",
    icon: CodeIcon,
    codeRender: (
      <>
        <span style={{ color: "#ff79c6" }}>const</span>{" "}
        <span style={{ color: "#50fa7b" }}>MemoComponent</span> ={" "}
        <span style={{ color: "#f1fa8c" }}>memo</span>((&#123;{" "}
        <span style={{ color: "#ffb86c" }}>data</span> &#125;) =&gt; &#123;
        <br />
        &nbsp;&nbsp;<span style={{ color: "#ff79c6" }}>const</span> sorted ={" "}
        <span style={{ color: "#f1fa8c" }}>useMemo</span>(() =&gt; &#123;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#ff79c6" }}>
          return
        </span>{" "}
        <span style={{ color: "#ffb86c" }}>data</span>.
        <span style={{ color: "#50fa7b" }}>sort</span>();
        <br />
        &nbsp;&nbsp;&#125;, [<span style={{ color: "#ffb86c" }}>data</span>]);
        <br />
        &nbsp;&nbsp;<span style={{ color: "#ff79c6" }}>return</span> &lt;
        <span style={{ color: "#ff79c6" }}>Box</span>&gt;&#123;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;sorted.
        <span style={{ color: "#50fa7b" }}>map</span>(item =&gt; &lt;
        <span style={{ color: "#ff79c6" }}>Row</span> key=&#123;item.id&#125;
        /&gt;)
        <br />
        &nbsp;&nbsp;&#125;&lt;/<span style={{ color: "#ff79c6" }}>Box</span>
        &gt;;
        <br />
        &#125;);
      </>
    ),
  },
  {
    id: 2,
    title: "Flawless UI Breakpoints with MUI",
    description:
      "Master fluid user interfaces by leveraging Material UI's grid engine. Learn the strategy of adaptive rendering, preventing layouts shifting, and maintaining consistent typography padding across all viewport breakpoints.",
    category: "Responsive",
    readTime: "5 min read",
    author: "Mahmoud Ghanem",
    date: "June 12, 2026",
    icon: LayersIcon,
    codeRender: (
      <>
        <span style={{ color: "#ff79c6" }}>const</span>{" "}
        <span style={{ color: "#50fa7b" }}>responsiveStyles</span> = &#123;
        <br />
        &nbsp;&nbsp;<span style={{ color: "#f1fa8c" }}>width</span>:{" "}
        <span style={{ color: "#f1fa8c" }}>"100%"</span>,<br />
        &nbsp;&nbsp;<span style={{ color: "#f1fa8c" }}>display</span>:{" "}
        <span style={{ color: "#f1fa8c" }}>"grid"</span>,<br />
        &nbsp;&nbsp;
        <span style={{ color: "#f1fa8c" }}>gridTemplateColumns</span>: &#123;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#ffb86c" }}>
          xs
        </span>: <span style={{ color: "#f1fa8c" }}>"1fr"</span>,{" "}
        <span style={{ color: "#ffb86c" }}>md</span>:{" "}
        <span style={{ color: "#f1fa8c" }}>"repeat(2, 1fr)"</span>
        <br />
        &nbsp;&nbsp;&#125;,
        <br />
        &nbsp;&nbsp;<span style={{ color: "#f1fa8c" }}>gap</span>:{" "}
        <span style={{ color: "#bd93f9" }}>theme</span>.
        <span style={{ color: "#50fa7b" }}>spacing</span>(
        <span style={{ color: "#bd93f9" }}>4</span>)<br />
        &#125;;
      </>
    ),
  },
  {
    id: 3,
    title: "Decoupling Enterprise MERN APIs",
    description:
      "Advance your backend structure. Build robust Express routing infrastructures, centralize polymorphic error-handling middleware, and design decoupled database schemas for massive scale.",
    category: "Full-Stack",
    readTime: "6 min read",
    author: "Codexo Team",
    date: "June 08, 2026",
    icon: StorageIcon,
    codeRender: (
      <>
        <span style={{ color: "#bd93f9" }}>router</span>.
        <span style={{ color: "#50fa7b" }}>route</span>(
        <span style={{ color: "#f1fa8c" }}>'/v1/courses'</span>)<br />
        &nbsp;&nbsp;.<span style={{ color: "#50fa7b" }}>get</span>(
        <span style={{ color: "#f1fa8c" }}>catchAsync</span>(
        <span style={{ color: "#ff79c6" }}>async</span> (
        <span style={{ color: "#ffb86c" }}>req</span>,{" "}
        <span style={{ color: "#ffb86c" }}>res</span>) =&gt; &#123;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#ff79c6" }}>
          const
        </span>{" "}
        courses = <span style={{ color: "#ff79c6" }}>await</span>{" "}
        <span style={{ color: "#bd93f9" }}>Course</span>.
        <span style={{ color: "#50fa7b" }}>find</span>()
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
        <span style={{ color: "#50fa7b" }}>lean</span>().
        <span style={{ color: "#50fa7b" }}>populate</span>(
        <span style={{ color: "#f1fa8c" }}>'author'</span>);
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#ffb86c" }}>res</span>.
        <span style={{ color: "#50fa7b" }}>status</span>(
        <span style={{ color: "#bd93f9" }}>200</span>).
        <span style={{ color: "#50fa7b" }}>json</span>(courses);
        <br />
        &nbsp;&nbsp;&#125;));
      </>
    ),
  },
  {
    id: 4,
    title: "High-Performance Portfolio UX",
    description:
      "Convert incoming visitors into job offers. Structure clean component architectures, ensure extreme asset compression pipelines, and deliver sub-second loading speeds to stand out globally.",
    category: "Career",
    readTime: "7 min read",
    author: "Codexo Team",
    date: "June 05, 2026",
    icon: SpeedIcon,
    codeRender: (
      <>
        <span style={{ color: "#ff79c6" }}>export const</span>{" "}
        <span style={{ color: "#50fa7b" }}>config</span> = &#123;
        <br />
        &nbsp;&nbsp;<span style={{ color: "#f1fa8c" }}>runtime</span>:{" "}
        <span style={{ color: "#f1fa8c" }}>'edge'</span>,<br />
        &nbsp;&nbsp;<span style={{ color: "#f1fa8c" }}>images</span>: &#123;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{ color: "#f1fa8c" }}>formats</span>: [
        <span style={{ color: "#f1fa8c" }}>'image/webp'</span>],
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{ color: "#f1fa8c" }}>minimumCacheTTL</span>:{" "}
        <span style={{ color: "#bd93f9" }}>31536000</span>
        <br />
        &nbsp;&nbsp;&#125;
        <br />
        &#125;;
      </>
    ),
  },
];

export default blogsData;
