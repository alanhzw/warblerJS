import{_ as s,c as a,o as n,N as l}from"./chunks/framework.0799945b.js";const A=JSON.parse('{"title":"身份证号（二代）","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reg/身份证号（二代）.md","lastUpdated":1680057765000}'),o={name:"guide/reg/身份证号（二代）.md"},p=l(`<h1 id="身份证号-二代" tabindex="-1">身份证号（二代） <a class="header-anchor" href="#身份证号-二代" aria-label="Permalink to &quot;身份证号（二代）&quot;">​</a></h1><p>验证二代身份证号，<code>18</code> 位，最后一位是校验位,可能为 <code>数字</code> 或字符 <code>X</code>。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">idSecondReg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">warbler-js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">idSecondReg</span><span style="color:#A6ACCD;">(value)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><ul><li><code>value</code> (<strong>String</strong>) ： 待验证字符串。</li></ul><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h2><p><strong>Boolean</strong> ： 是否通过验证，<code>true</code> 通过验证， <code>false</code> 没有通过验证。</p><h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> idSecondReg </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{5}(?:</span><span style="color:#C3E88D;">18</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">19</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">20</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{2}(?:</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]|</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">11</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">12</span><span style="color:#89DDFF;">)(?:</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">1-9</span><span style="color:#89DDFF;">]|[</span><span style="color:#C3E88D;">1-2</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">30</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">31</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{3}[</span><span style="color:#C3E88D;">\\dXx</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reg</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">idSecondReg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">warbler-js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">idSecondReg</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">150404199803095215</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">idSecondReg</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">15040419980309521x</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result1) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result2) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div>`,12),e=[p];function t(c,r,D,y,F,i){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
