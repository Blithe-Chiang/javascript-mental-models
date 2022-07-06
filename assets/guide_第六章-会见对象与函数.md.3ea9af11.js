import{_ as s,c as a,o as n,a as l}from"./app.eaf9bfb7.js";const A=JSON.parse('{"title":"Meeting Objects and Functions","description":"","frontmatter":{},"headers":[{"level":2,"title":"Objects","slug":"objects"},{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"\u51FD\u6570\u8C03\u7528","slug":"\u51FD\u6570\u8C03\u7528"},{"level":2,"title":"\u56DE\u987E","slug":"\u56DE\u987E"}],"relativePath":"guide/\u7B2C\u516D\u7AE0-\u4F1A\u89C1\u5BF9\u8C61\u4E0E\u51FD\u6570.md","lastUpdated":1657121956000}'),p={name:"guide/\u7B2C\u516D\u7AE0-\u4F1A\u89C1\u5BF9\u8C61\u4E0E\u51FD\u6570.md"},o=l(`<h1 id="meeting-objects-and-functions" tabindex="-1">Meeting Objects and Functions <a class="header-anchor" href="#meeting-objects-and-functions" aria-hidden="true">#</a></h1><blockquote><p>\u5728\u524D\u9762\u7684\u6A21\u5757\u4E2D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u4E86\u89E3\u4E86\u539F\u59CB\u503C:Undefined\u3001Null\u3001Booleans\u3001Numbers\u3001BigInts\u3001Strings \u548C Symbols \u3002\u73B0\u5728\u6211\u4EEC\u5C06\u4ECB\u7ECD\u975E\u539F\u59CB\u503C\u2014\u8FD9\u4E9B\u7C7B\u578B\u53EF\u4EE5\u8BA9\u6211\u4EEC\u521B\u5EFA\u81EA\u5DF1\u7684\u503C\u3002</p></blockquote><p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h0nh2vwh6dj20u00z5q5i.jpg" alt="image-20220326184330896"></p><h2 id="objects" tabindex="-1">Objects <a class="header-anchor" href="#objects" aria-hidden="true">#</a></h2><blockquote><p>\u6570\u7EC4\u3001\u6B63\u5219\u7B49\u7B49\u975E\u539F\u59CB\u503C\u90FD\u5C5E\u4E8E\u5BF9\u8C61\u7C7B\u578B</p></blockquote><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;object&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;">([]))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;object&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#A6ACCD;">()))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;object&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">+/</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;object&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;">(Math))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;object&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u4E0E\u4EE5\u524D\u4E0D\u540C\uFF0C\u5BF9\u8C61\u4E0D\u662F\u539F\u59CB\u503C\u3002\u8FD9\u4E5F\u610F\u5473\u7740\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5B83\u4EEC\u662F\u53EF\u53D8\u7684(\u6211\u4EEC\u53EF\u4EE5\u66F4\u6539\u5B83\u4EEC)\u3002\u6211\u4EEC\u53EF\u4EE5\u7528<code>.</code>\u6216<code>[]</code></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> rapper </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Malicious</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">rapper</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Malice</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Dot notation</span></span>
<span class="line"><span style="color:#A6ACCD;">rapper[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">No Malice</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Bracket notation</span></span>
<span class="line"></span></code></pre></div><p>\u521B\u5EFA\u6211\u4EEC\u81EA\u5DF1\u7684\u5BF9\u8C61</p><p>\u5728\u524D\u9762\u4ECB\u7ECD\u7684\u539F\u59CB\u503C\uFF0C\u6211\u4EEC\u53EA\u80FD\u53EC\u5524\u5B83\u4EEC\uFF0C\u800C\u4E0D\u80FD\u81EA\u5DF1\u521B\u9020\u5B83\u4EEC\uFF0C\u4F46\u662F\u5BF9\u8C61\u7C7B\u578B\uFF0C\u662F\u6211\u4EEC\u53EF\u4EE5\u521B\u9020\u7684</p><p>\u6BCF\u6B21\u4F7F\u7528{}\u5BF9\u8C61\u5B57\u9762\u91CF\u65F6\uFF0C\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u5168\u65B0\u7684\u5BF9\u8C61\u503C</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> shrek </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> donkey </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"></span></code></pre></div><p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h0nh8dw33xj20sg0iat9s.jpg" alt="image-20220326184851319"></p><p>\u6211\u4EEC\u521B\u9020\u7684\u5BF9\u8C61\u4F1A\u6D88\u5931\u4E48\uFF1F</p><p>\u4F1A\u7684\uFF0C\u5F53\u6211\u4EEC\u5C06\u6307\u5411\u5BF9\u8C61\u7684\u53D8\u91CF\uFF08\u7EBF\uFF09\u6307\u5411null\u539F\u59CB\u503C\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u521B\u9020\u7684\u5BF9\u8C61\u5C31\u6CA1\u6709\u53D8\u91CF\u6307\u5411\uFF0CJavaScript\u7684\u5783\u573E\u56DE\u6536\u673A\u5236\u5C31\u5728\u4E0D\u7ECF\u610F\u95F4\u53BB\u56DE\u6536\u6389\u5B83\u267B\uFE0F</p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><blockquote><p>\u6211\u4EEC\u5B9A\u4E49\u51FD\u6570\u662F\u4E3A\u4E86\u4EE5\u540E\u53EF\u4EE5\u8C03\u7528\u5B83\u4EEC\u5E76\u5728\u5176\u4E2D\u8FD0\u884C\u4EE3\u7801\u3002\u7136\u800C\uFF0C\u8981\u771F\u6B63\u7406\u89E3JavaScript\u4E2D\u7684\u51FD\u6570\uFF0C\u6211\u4EEC\u9700\u8981\u6682\u65F6\u5FD8\u8BB0\u5B83\u4EEC\u4E3A\u4EC0\u4E48\u6709\u7528\u3002\u76F8\u53CD\uFF0C\u6211\u4EEC\u5C06\u628A\u51FD\u6570\u770B\u4F5C\u53E6\u4E00\u79CD\u7C7B\u578B\u7684\u503C:\u6570\u5B57\u3001\u5BF9\u8C61\u3001\u51FD\u6570\u3002</p></blockquote><p>\u8BA9\u6211\u4EEC\u6765\u770B\u770B\u4E0B\u9762\u7684\u4EE3\u7801\uFF0C\u7528\u4F60\u73B0\u5728\u7684\u5FC3\u667A\u6A21\u578B\u601D\u8003\u4E00\u4E0B\u{1F914}\uFF0C\u5B83\u4EEC\u6709\u4EC0\u4E48\u533A\u522B\u4E48</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4F20\u9012\u7ED9log\u51FD\u6570\u7684\u6C38\u8FDC\u53EA\u6709\u4E00\u4E2Avalue\u503C\u5C31\u662F2</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u91CC\u4F1A\u521B\u5EFA7\u4E2A\u4E0D\u540C\u7684\u5BF9\u8C61\u7C7B\u578B\u7684\u503C</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u91CC\u540C\u6837\u4E5F\u4F1A\u521B\u5EFA7\u4E2A\u4E0D\u540C\u5BF9\u8C61\u7C7B\u578B\u7684\u503C\uFF0C\u56E0\u4E3A\u51FD\u6570\u4E5F\u662F\u5BF9\u8C61</p><p>\u4ECE\u6280\u672F\u4E0A\u8BB2\uFF0C\u51FD\u6570\u662FJavaScript\u4E2D\u7684\u5BF9\u8C61\u3002\u6211\u4EEC\u5C06\u7EE7\u7EED\u5C06\u5B83\u4EEC\u4F5C\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7684\u57FA\u672C\u7C7B\u578B\uFF0C\u56E0\u4E3A\u4E0E\u5E38\u89C4\u5BF9\u8C61\u76F8\u6BD4\uFF0C\u5B83\u4EEC\u5177\u6709\u72EC\u7279\u7684\u529F\u80FD\u3002\u4F46\u4E00\u822C\u6765\u8BF4\uFF0C\u5982\u679C\u4F60\u80FD\u5BF9\u4E00\u4E2A\u5BF9\u8C61\u505A\u4E9B\u4EC0\u4E48\uFF0C\u4F60\u4E5F\u80FD\u5BF9\u4E00\u4E2A\u51FD\u6570\u505A\u4E9B\u4EC0\u4E48\u3002\u5B83\u4EEC\u5F88\u7279\u522B</p><h3 id="\u51FD\u6570\u8C03\u7528" tabindex="-1">\u51FD\u6570\u8C03\u7528 <a class="header-anchor" href="#\u51FD\u6570\u8C03\u7528" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> countDwarves </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> dwarves </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">countDwarves</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// () is a function call</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(dwarves)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u6DFB\u52A0()\u4F1A\u6539\u53D8\u4EE3\u7801\u7684\u542B\u4E49:</p><ul><li>let dwarves = countDwarves\u8868\u793A\u201C\u5C06dwarves\u6307\u5411countDwarves\u5F53\u524D\u6307\u5411\u7684\u503C\u3002\u201D</li><li>let dwarves = countDwarves()\u8868\u793A\u201C\u5C06 dwarves\u6307\u5411countDwarves\u5F53\u524D\u6307\u5411\u7684\u51FD\u6570\u8FD4\u56DE\u7684\u503C\u3002\u201D</li></ul><p>\u4E8B\u5B9E\u4E0A\uFF0CcountDwarves()\u4E5F\u662F\u4E00\u4E2A\u8868\u8FBE\u5F0F\u3002\u5B83\u88AB\u79F0\u4E3A\u8C03\u7528\u8868\u8FBE\u5F0F\u3002\u8981\u201C\u56DE\u7B54\u201D\u4E00\u4E2A\u8C03\u7528\u8868\u8FBE\u5F0F\uFF0CJavaScript\u5728\u51FD\u6570\u5185\u90E8\u8FD0\u884C\u4EE3\u7801\uFF0C\u5E76\u5C06\u8FD4\u56DE\u503C\u4F5C\u4E3A\u7ED3\u679C\u4EA4\u7ED9\u6211\u4EEC(\u5728\u672C\u4F8B\u4E2D\u662F7)\u3002</p><h2 id="\u56DE\u987E" tabindex="-1">\u56DE\u987E <a class="header-anchor" href="#\u56DE\u987E" aria-hidden="true">#</a></h2><p>\u5728\u524D\u4E24\u4E2A\u6A21\u5757\u4E2D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u4E86\u89E3\u4E86JavaScript\u4E2D\u7684\u6BCF\u79CD\u503C\u7C7B\u578B\u3002\u8BA9\u6211\u4EEC\u56DE\u987E\u4E00\u4E0B\u6211\u4EEC\u9047\u5230\u7684\u6BCF\u79CD\u7C7B\u578B\u7684\u503C\uFF0C\u4ECE\u4E0D\u540C\u7684\u539F\u59CB\u7C7B\u578B\u5F00\u59CB</p><p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h0nhk53o1lj20we0fywfq.jpg" alt="image-20220326190008951"></p><ul><li>Undefined</li><li>Null</li><li>Booleans</li><li>Numbers</li><li>BigInts</li><li>Strings</li><li>Symbols</li></ul><p>\u7136\u540E\u8FD9\u91CC\u8FD8\u4EE5\u6B27\u4E24\u4E2A\u7279\u6B8A\u7684\u7C7B\u578B\uFF0C\u53EF\u4EE5\u81EA\u5DF1\u521B\u9020\u503C\u7684\u7C7B\u578B</p><p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h0nhlatcz4j20to0fut9b.jpg" alt="image-20220326190115441"></p><ul><li><p>Objects</p></li><li><p>Functions</p></li><li><p>\u539F\u59CB\u503C(\u5B57\u7B26\u4E32\u3001\u6570\u5B57\u7B49\u7B49)\u4E00\u76F4\u5B58\u5728\u4E8E\u6211\u4EEC\u7684\u5B87\u5B99\u4E2D\u3002\u4F8B\u5982\uFF0C\u51992\u6216\u201Chello\u201D\u603B\u662F\u201C\u53EC\u5524\u201D\u76F8\u540C\u7684\u6570\u5B57\u6216\u5B57\u7B26\u4E32\u503C\u3002</p></li><li><p>\u5BF9\u8C61\u548C\u51FD\u6570\u7684\u884C\u4E3A\u4E0D\u540C\uFF0C\u5E76\u5141\u8BB8\u6211\u4EEC\u751F\u6210\u81EA\u5DF1\u7684\u503C\u3002\u7F16\u5199{}\u6216function(){}\u603B\u662F\u4F1A\u521B\u5EFA\u4E00\u4E2A\u5168\u65B0\u7684\u3001\u4E0D\u540C\u7684\u503C\u3002\u8FD9\u4E2A\u60F3\u6CD5\u5BF9\u4E8E\u7406\u89E3\u662F\u81F3\u5173\u91CD\u8981\u7684</p></li></ul>`,37),e=[o];function t(c,r,D,y,F,i){return n(),a("div",null,e)}var d=s(p,[["render",t]]);export{A as __pageData,d as default};
