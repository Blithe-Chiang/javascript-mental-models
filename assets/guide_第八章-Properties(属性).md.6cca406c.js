import{_ as s,c as a,o as n,a as p}from"./app.eaf9bfb7.js";const i=JSON.parse('{"title":"Properties","description":"","frontmatter":{},"headers":[{"level":2,"title":"Properties","slug":"properties-1"},{"level":2,"title":"Property Names","slug":"property-names"},{"level":2,"title":"Assigning to a Property","slug":"assigning-to-a-property"},{"level":2,"title":"Missing Properties(\u7F3A\u5931\u5C5E\u6027)","slug":"missing-properties-\u7F3A\u5931\u5C5E\u6027"},{"level":2,"title":"\u56DE\u987E","slug":"\u56DE\u987E"}],"relativePath":"guide/\u7B2C\u516B\u7AE0-Properties(\u5C5E\u6027).md","lastUpdated":1657121956000}'),l={name:"guide/\u7B2C\u516B\u7AE0-Properties(\u5C5E\u6027).md"},o=p(`<h1 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h1><p>\u8BA9\u6211\u4EEC\u5148\u6765\u770B\u770B\u4EE5\u4E0B\u7684\u4EE3\u7801\u5427</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> sherlock </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">surname</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Holmes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">address</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">city</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">London</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> john </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">surname</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Watson</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">address</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> sherlock</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">address</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">john</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">surname </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Lennon</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">john</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">address</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">city </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Malibu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(sherlock</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">surname)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// ?</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(sherlock</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">address</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">city)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// ?</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(john</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">surname)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// ?</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(john</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">address</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">city)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// ?</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u9762\u7684\u7B54\u6848\u662F\u4EC0\u4E48\uFF1F\u901A\u8FC7\u6211\u4EEC\u4E4B\u524D\u5185\u5BB9\uFF0C\u5C1D\u8BD5\u7528JS\u7684\u5FC3\u667A\u6A21\u578B\u6765\u56DE\u7B54\u5B83\u5427</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(sherlock</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">surname)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;Holmes&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(sherlock</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">address</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">city)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;Malibu&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(john</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">surname)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;Lennon&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(john</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">address</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">city)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;Malibu&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-hidden="true">#</a></h2><blockquote><p>\u6211\u4EEC\u4E4B\u524D\u8BA8\u8BBA\u8FC7Object\uFF0C\u4F8B\u5982\uFF0C\u8FD9\u91CC\u6709\u4E00\u4E2A\u6307\u5411\u5BF9\u8C61\u503C\u7684sherlock\u53D8\u91CF\u3002\u6211\u4EEC\u901A\u8FC7\u5199\u5165{}\u6765\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u503C</p></blockquote><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> sherlock </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"></span></code></pre></div><p>\u5728JavaScript\u7684\u5B87\u5B99\u4E2D\u5B83\u5E94\u8BE5\u770B\u6765\u662F\u662F\u8FD9\u6837\u7684</p><p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h14uixekb7j20wc0c2q3b.jpg" alt="image-20220410192322504"></p><p>\u7136\u800C\uFF0C\u5BF9\u8C61\u4E3B\u8981\u7528\u4E8E\u5C06\u76F8\u5173\u6570\u636E\u5206\u7EC4\u5728\u4E00\u8D77\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u53EF\u80FD\u60F3\u628A\u5173\u4E8Esherlock\u7684\u4E0D\u540C\u4E8B\u5B9E\u5F52\u7C7B\uFF0C\u8981\u8BB0\u4F4F\u5BF9\u8C61\u53EA\u662F\u5C06\u6570\u636E\u5C01\u88C5\u5206\u7EC4\uFF0C\u6570\u636E\u5E76\u4E0D\u662F\u5C5E\u4E8E\u5BF9\u8C61</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> sherlock </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">surname</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Holmes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">64</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u8FD9\u91CC\uFF0Csherlock\u4ECD\u7136\u662F\u4E00\u4E2A<code>\u53D8\u91CF</code>\uFF0C\u4F46surname\u548Cage\u4E0D\u662F\u3002\u5B83\u4EEC\u662F\u5C5E\u6027\uFF0C\u4E0E\u53D8\u91CF\u4E0D\u540C\uFF0C\u5C5E\u6027\u5C5E\u4E8E\u7279\u5B9A\u7684\u5BF9\u8C61\u3002</p><p><strong>\u5728\u6211\u4EEC\u7684JavaScript\u4E16\u754C\u4E2D\uFF0C\u53D8\u91CF\u548C\u5C5E\u6027\u7684\u884C\u4E3A\u90FD\u7C7B\u4F3C\u4E8E\u201C\u8FDE\u63A5\u201D\u3002\u4F46\u662F\uFF0C\u5C5E\u6027\u7684\u8FDE\u63A5\u662F\u4ECE\u5BF9\u8C61\u5F00\u59CB\u7684\uFF0C\u800C\u4E0D\u662F\u4ECE\u4EE3\u7801\u5F00\u59CB\u7684</strong></p><p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h14umnddcvj21120d8mxy.jpg" alt="image-20220410192656858"></p><p>\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230sherlock\u53D8\u91CF\u6307\u5411\u6211\u4EEC\u521B\u5EFA\u7684\u4E00\u4E2A\u5BF9\u8C61\u3002\u8BE5\u5BF9\u8C61\u6709\u4E24\u4E2A\u5C5E\u6027\u3002\u5B83\u7684surname\u5C5E\u6027\u6307\u5411\u201CHolmes\u201D\u5B57\u7B26\u4E32\u503C\uFF0C\u5B83\u7684age\u5C5E\u6027\u6307\u541164\u4E2A\u6570\u5B57\u503C\u3002</p><p>\u91CD\u8981\u7684\u662F\uFF0C<strong>\u5C5E\u6027\u4E0D\u5305\u542B\u503C\u2014\u2014\u5B83\u4EEC\u6307\u5411\u503C!</strong> \u8BB0\u4F4F\uFF0C\u6211\u4EEC\u7684\u5B87\u5B99\u5145\u6EE1\u4E86<code>\u7535\u7EBF</code>\u3002\u5176\u4E2D\u4E00\u4E9B\u4ECE\u4EE3\u7801(\u53D8\u91CF)\u5F00\u59CB\uFF0C\u53E6\u4E00\u4E9B\u4ECE\u5BF9\u8C61(\u5C5E\u6027)\u5F00\u59CB\u3002\u6240\u6709\u5BFC\u7EBF\u603B\u662F\u6307\u5411\u503C\u3002</p><p>\u5728\u9605\u8BFB\u672C\u6587\u4E4B\u524D\uFF0C\u60A8\u53EF\u80FD\u4F1A\u8BA4\u4E3A\u503C\u5B58\u5728\u4E8E\u5BF9\u8C61\u201C\u5185\u90E8\u201D\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u51FA\u73B0\u5728\u4EE3\u7801\u7684\u201C\u5185\u90E8\u201D\u3002\u8FD9\u79CD\u76F4\u89C9\u7ECF\u5E38\u4F1A\u5BFC\u81F4\u9519\u8BEF\uFF0C\u6240\u4EE5\u6211\u4EEC\u4F1A\u201C\u5728\u7535\u7EBF\u4E2D\u601D\u8003\u201D\u3002\u518D\u770B\u4E00\u4E0B\u4EE3\u7801\u548C\u56FE\u8868\u3002\u5728\u7EE7\u7EED\u4E4B\u524D\uFF0C\u786E\u4FDD\u4F60\u5BF9\u4ED6\u4EEC\u611F\u5230\u8212\u670D\u3002</p><h2 id="property-names" tabindex="-1">Property Names <a class="header-anchor" href="#property-names" aria-hidden="true">#</a></h2><p>\u5728\u547D\u540D\u5C5E\u6027\u65F6\u8981\u8BB0\u4F4F\u7684\u4E00\u4EF6\u91CD\u8981\u4E8B\u60C5\u662F\uFF0C\u4E00\u4E2A\u5BF9\u8C61\u4E0D\u80FD\u6709\u4E24\u4E2A\u5177\u6709\u76F8\u540C\u540D\u79F0\u7684\u5C5E\u6027\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u7684\u5BF9\u8C61\u4E0D\u80FD\u6709\u4E24\u4E2A\u540D\u4E3Aage\u7684\u5C5E\u6027\u3002</p><p>\u5C5E\u6027\u540D\u4E5F\u603B\u662F\u533A\u5206\u5927\u5C0F\u5199!\u4F8B\u5982\uFF0Cage\u548CAge\u4ECEJavaScript\u7684\u89D2\u5EA6\u6765\u770B\u662F\u4E24\u4E2A\u5B8C\u5168\u4E0D\u540C\u7684\u5C5E\u6027\u3002</p><p>\u5982\u679C\u6211\u4EEC\u4E8B\u5148\u4E0D\u77E5\u9053\u5C5E\u6027\u540D\uFF0C\u4F46\u6211\u4EEC\u5728\u4EE3\u7801\u4E2D\u628A\u5B83\u4F5C\u4E3A\u5B57\u7B26\u4E32\u503C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528[]\u201C\u62EC\u53F7\u8868\u793A\u6CD5\u201D\u4ECE\u5BF9\u8C61\u4E2D\u8BFB\u53D6\u5B83</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> sherlock </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">surname</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Holmes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> propertyName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">prompt</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">What do you want to know?</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(sherlock[propertyName])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Read property by its name</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="assigning-to-a-property" tabindex="-1">Assigning to a Property <a class="header-anchor" href="#assigning-to-a-property" aria-hidden="true">#</a></h2><p>\u5F53\u6211\u4EEC\u7ED9\u5C5E\u6027\u8D4B\u503C\u65F6\u4F1A\u53D1\u751F\u4EC0\u4E48?</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sherlock</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">65</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u8BA9\u6211\u4EEC\u628A\u8FD9\u6BB5\u4EE3\u7801\u5206\u6210\u5DE6\u53F3\u4E24\u90E8\u5206\uFF0C\u7528=\u5206\u9694\u3002</p><ul><li><p>\u9996\u5148\uFF0C\u6211\u4EEC\u627E\u51FA\u5DE6\u8FB9\u54EA\u6839\u7EBF\u662Fsherlock.age</p></li><li><p>\u6211\u4EEC\u8DDF\u7740sherlock\u7684\u7EBF\uFF0C\u7136\u540E\u9009age\u5C5E\u6027\u7684\u7EBF</p></li></ul><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h15w9wwshyj21060kqwfu.jpg" alt="image-20220410195742272" style="zoom:33%;"><p>\u6CE8\u610F\uFF0C\u6211\u4EEC\u6CA1\u6709\u6309\u7167age\u7EBF\u5199\u4E0A64\u5C81\u3002</p><p>\u6211\u4EEC\u4E0D\u5173\u5FC3\u5B83\u7684\u5F53\u524D\u503C\u662F\u591A\u5C11\u3002</p><p>\u5728\u5206\u914D\u8BED\u53E5\u7684\u5DE6\u8FB9\uFF0C\u6211\u4EEC\u8981\u627E\u5BFC\u7EBF\u672C\u8EAB\u3002 \u8FD8\u8BB0\u5F97\u6211\u4EEC\u9009\u4E86\u54EA\u6839\u7EBF\u5417?\u8BA9\u6211\u4EEC\u7EE7\u7EED</p><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u627E\u51FA\u53F3\u8FB9\u7684\u503C:65\u3002</p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h14vkqmznij20zs0jwta0.jpg" alt="image-20220410195943038" style="zoom:33%;"><p>\u73B0\u5728\u6211\u4EEC\u51C6\u5907\u597D\u6267\u884C\u4EFB\u52A1\u4E86\u3002</p><p>\u6700\u540E\uFF0C\u6211\u4EEC\u5C06\u5DE6\u4FA7\u7684\u5BFC\u7EBF\u6307\u5411\u53F3\u4FA7\u7684\u503C</p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h14vlf7e9oj210o0komyj.jpg" alt="image-20220410200018165" style="zoom:33%;"><p>\u6211\u4EEC\u5B8C\u6210\u4E86!\u4ECE\u73B0\u5728\u5F00\u59CB\uFF0C\u8BFBsherlock.age\u662F65\u5C81\u3002</p><h2 id="missing-properties-\u7F3A\u5931\u5C5E\u6027" tabindex="-1">Missing Properties(\u7F3A\u5931\u5C5E\u6027) <a class="header-anchor" href="#missing-properties-\u7F3A\u5931\u5C5E\u6027" aria-hidden="true">#</a></h2><p>\u60A8\u53EF\u80FD\u60F3\u77E5\u9053\uFF0C\u5982\u679C\u8BFB\u53D6\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u5C5E\u6027\u4F1A\u53D1\u751F\u4EC0\u4E48</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> sherlock </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">surname</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Holmes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(sherlock</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">boat)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// ?</span></span>
<span class="line"></span></code></pre></div><p>\u6211\u4EEC\u77E5\u9053<code>sherlock.boat</code>\u662F\u4E00\u4E2A\u5C5E\u6027\u8868\u8FBE\u5F0F\uFF0C\u4F46\u662F\u6211\u4EEC\u7684JavaScript\u5B87\u5B99\u5982\u4F55\u51B3\u5B9A\u7528\u54EA\u4E2A\u503C\u6765\u201C\u56DE\u7B54\u201D\u6211\u4EEC\u5462?</p><p><strong>JavaScript\u4F7F\u7528\u4E86\u4E00\u7EC4\u7C7B\u4F3C\u4E8E\u4E0B\u9762\u7684\u89C4\u5219:</strong></p><ol><li><p>\u7B97\u51FA\u70B9(&#39; . &#39;)\u524D\u9762\u7684\u90E8\u5206\u7684\u503C\u3002</p></li><li><p>\u5982\u679C\u8BE5\u503C\u4E3A&#39; null &#39;\u6216&#39; undefined &#39;\uFF0C\u5219\u7ACB\u5373\u629B\u51FA\u9519\u8BEF\u3002</p></li><li><p>\u68C0\u67E5\u5BF9\u8C61\u4E2D\u662F\u5426\u5B58\u5728\u540C\u540D\u5C5E\u6027:</p><p>a.\u5982\u679C<strong>\u5B58\u5728</strong>\uFF0C\u8BF7\u4F7F\u7528\u6B64\u5C5E\u6027\u6307\u5411\u7684\u503C\u56DE\u7B54\u3002</p><p>b.\u5982\u679C<strong>\u4E0D\u5B58\u5728</strong>\uFF0C\u5219\u4F7F\u7528&#39; undefined &#39;\u503C\u56DE\u7B54\u3002</p></li></ol><p>\u8FD9\u4E9B\u89C4\u5219\u6709\u70B9\u7B80\u5355\uFF0C\u4F46\u5B83\u4EEC\u5DF2\u7ECF\u544A\u8BC9\u4E86\u6211\u4EEC\u5F88\u591A\u5173\u4E8EJavaScript\u5982\u4F55\u5DE5\u4F5C\u7684\u4FE1\u606F!\u4F8B\u5982\uFF0Csherlock\u6307\u5411\u4E00\u4E2A\u6CA1\u6709boat\u5C5E\u6027\u7684\u5BF9\u8C61\u3002\u6240\u4EE5<code>sherlock.boat</code>\u7ED9\u51FA\u7684\u7B54\u6848\u662Fundefined</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> sherlock </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">surname</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Holmes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(sherlock</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">boat)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// undefined</span></span>
<span class="line"></span></code></pre></div><p>\u6CE8\u610F\uFF0C\u8FD9\u5E76\u4E0D\u610F\u5473\u7740\u6211\u4EEC\u7684\u5BF9\u8C61\u6709\u4E00\u4E2A\u6307\u5411undefined\u7684boat\u5C5E\u6027!\u5B83\u53EA\u6709\u4E24\u4E2A\u5C5E\u6027 surname \u548C age</p><p>\u4EBA\u4EEC\u5F88\u5BB9\u6613\u60F3\u5230<code>sherlock.boat</code>\u76F4\u63A5\u5BF9\u5E94\u4E8E\u6211\u4EEC\u5FC3\u7406\u6A21\u578B\u4E2D\u7684\u5C5E\u6027\u6982\u5FF5\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u5B8C\u5168\u6B63\u786E\u3002\u8FD9\u662F\u4E00\u4E2A<code>\u95EE\u9898</code>\uFF0C\u6240\u4EE5JavaScript<code>\u9075\u5FAA\u89C4\u5219</code>\u6765\u56DE\u7B54\u8FD9\u4E2A\u95EE\u9898\u3002</p><p>\u5B83\u89C2\u5BDF\u2018sherlock\u2019\u6307\u5411\u7684\u5BF9\u8C61\uFF0C\u53D1\u73B0\u5B83<strong>\u6CA1\u6709</strong>\u7684\u2018boat\u2019\u5C5E\u6027\uFF0C\u5E76\u8FD4\u56DE\u7ED9\u6211\u4EEC\u4E00\u4E2A<code>undefined</code>\u7684\u503C\uFF0C\u56E0\u4E3A<strong>\u8FD9\u5C31\u662F\u89C4\u5219\u6240\u8BF4\u7684</strong>\u3002\u8FD9\u5176\u4E2D\u6CA1\u6709\u66F4\u6DF1\u5C42\u6B21\u7684\u539F\u56E0\uFF0C<code>\u8BA1\u7B97\u673A\u9075\u5FAA\u89C4\u5219</code>\u3002</p><p>\u4E8B\u5B9E\u4E0A</p><blockquote><p>\u4ECE\u6839\u672C\u4E0A\u8BF4\uFF0C\u8FD9\u662F\u56E0\u4E3A\u6BCF\u4E2A\u8868\u8FBE\u5F0F\u90FD\u9700\u8981\u4EA7\u751F\u67D0\u4E2A\u503C\uFF0C\u6216\u8005\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\u3002\u5176\u4ED6\u4E00\u4E9B\u8BED\u8A00\u5728\u8BBF\u95EE\u4E0D\u5B58\u5728\u7684\u5C5E\u6027\u65F6\u4F1A\u629B\u51FA\u9519\u8BEF\uFF0C\u4F46JavaScript\u4E0D\u662F\u5176\u4E2D\u4E4B\u4E00!</p></blockquote><p>\u73B0\u5728\u518D\u770B\u770B\u4E0B\u9762\u7684\u4EE3\u7801\uFF0C\u4F60\u80FD\u544A\u8BC9\u6211\u6B63\u786E\u7ED3\u679C\u4E48?</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> sherlock </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">surname</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Holmes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(sherlock</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">boat</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// ?</span></span>
<span class="line"></span></code></pre></div><p>\u4E0D\u8981\u731C\u6D4B\u54E6\uFF0C\u9075\u5FAAJS\u7684\u89C4\u5219</p><p>Hint: \u8FD9\u91CC\u6709\u4E24\u4E2A\u70B9\uFF0C\u6240\u4EE5\u4F60\u9700\u8981\u9075\u5B88\u89C4\u5219\u4E24\u6B21\u3002</p><p>\u7B54\u6848\u662F\u4F1A\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\uFF0C\u53EF\u4EE5\u6309\u7167\u4E0B\u9762\u7684\u4EE3\u7801\u6765\u62C6\u89E3\u95EE\u9898\u5C31\u77E5\u9053\u4E86\u{1F447}</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> sherlock </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">surname</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Holmes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(sherlock</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">boat)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(sherlock</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">boat</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// TypeError!</span></span>
<span class="line"></span></code></pre></div><h2 id="\u56DE\u987E" tabindex="-1">\u56DE\u987E <a class="header-anchor" href="#\u56DE\u987E" aria-hidden="true">#</a></h2><ul><li><p>\u5C5E\u6027\u662F\u7EBF\u2014\u2014\u6709\u70B9\u50CF\u53D8\u91CF\u3002\u5B83\u4EEC\u90FD\u6307\u5411\u503C\u3002\u4E0E\u53D8\u91CF\u4E0D\u540C\uFF0C\u5C5E\u6027\u5728\u6211\u4EEC\u7684\u5B87\u5B99\u4E2D\u662F\u4ECE<code>\u5BF9\u8C61</code>\u5F00\u59CB\u7684\uFF0C\u53D8\u91CF\u662F\u4ECE<code>\u4EE3\u7801</code>\u5F00\u59CB\u7684</p></li><li><p>\u5C5E\u6027\u5C5E\u4E8E\u7279\u5B9A\u7684\u5BF9\u8C61\u3002\u4E00\u4E2A\u5BF9\u8C61\u4E0A\u4E0D\u80FD\u6709\u591A\u4E2A\u5177\u6709\u76F8\u540C\u540D\u79F0\u7684\u5C5E\u6027\u3002</p></li><li><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u4F60\u53EF\u4EE5\u7528\u4E09\u4E2A\u6B65\u9AA4\u6765\u6267\u884C\u8D4B\u503C:</p><ol><li>\u627E\u51FA\u54EA\u6839\u7EBF\u5728\u5DE6\u8FB9</li><li>\u627E\u51FA\u53F3\u8FB9\u7684\u503C</li><li>\u628A\u5BFC\u7EBF\u6307\u5411\u90A3\u4E2A\u503C</li></ol></li><li><p>\u4E00\u4E2A\u8868\u8FBE\u5F0F \u50CF\u4E0B\u9762\u7684</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">obj.property</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u662F\u5206\u4E09\u6B65\u8BA1\u7B97:</p><ol><li>\u627E\u51FA<code>.</code>\u5DE6\u8FB9\u7684\u503C</li><li>\u5982\u679C\u662F<code> null</code>\u6216<code>undefined</code>\uFF0C\u5219\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\u3002</li><li>\u5982\u679C\u8BE5\u5C5E\u6027\u5B58\u5728\uFF0C\u7ED3\u679C\u5C31\u662F\u5B83\u6240\u6307\u5411\u7684\u503C\u3002\u5982\u679C\u8BE5\u5C5E\u6027\u4E0D\u5B58\u5728\uFF0C\u5219\u7ED3\u679C\u4E3A<code>undefined </code>\u3002</li></ol></li></ul><p>\u6CE8\u610F\uFF0C\u8FD9\u79CD\u5C5E\u6027\u7684\u5FC3\u7406\u6A21\u578B\u4ECD\u7136\u6709\u4E9B\u7B80\u5316\u3002\u76EE\u524D\u5B83\u5DF2\u7ECF\u8DB3\u591F\u597D\u4E86\uFF0C\u4F46\u968F\u7740\u60A8\u5BF9JavaScript\u9886\u57DF\u7684\u4E86\u89E3\u8D8A\u6765\u8D8A\u591A\uFF0C\u5B83\u8FD8\u9700\u8981\u8FDB\u4E00\u6B65\u6269\u5C55\u3002</p>`,63),e=[o];function c(r,t,D,y,F,A){return n(),a("div",null,e)}var d=s(l,[["render",c]]);export{i as __pageData,d as default};
