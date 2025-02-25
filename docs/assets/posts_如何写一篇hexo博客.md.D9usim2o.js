import{_ as a,c as i,o as h,a2 as t}from"./chunks/framework.CSVsBaMC.js";const g=JSON.parse('{"title":"如何写一篇hexo博客","description":"","frontmatter":{"title":"如何写一篇hexo博客","date":"2024-01-29T23:39:47.000Z","cover":"https://resource-un4.pages.dev/yspic/dm1.webp","categories":"瞎捣鼓","copyright":true},"headers":[],"relativePath":"posts/如何写一篇hexo博客.md","filePath":"posts/如何写一篇hexo博客.md","lastUpdated":null}'),p={name:"posts/如何写一篇hexo博客.md"};function n(e,s,l,k,r,o){return h(),i("div",null,s[0]||(s[0]=[t(`<h2 id="常规" tabindex="-1">常规 <a class="header-anchor" href="#常规" aria-label="Permalink to &quot;常规&quot;">​</a></h2><p>​ 建一个hexo博客：推荐<a href="https://www.fomal.cc/posts/e593433d.html" target="_blank" rel="noreferrer">Fomalhaut大佬总结的建站教程</a></p><p>​ 在博客根目录下打开命令行（或者bash,需要一定权限），输入hexo new post &quot;你的标题&quot;</p><p>​ 打开博客_source文件夹，找到对应的标题，使用编辑器打开（这里我推荐Typora，方便给你的文章加上配图，当然VSCODE也有相应的插件，其实只要不嫌麻烦，记事本都行）。编写完成后，依旧是在你的根目录下执行cmd或者bash：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cl</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #这一行是为了删除已经生成的文件，对修改过的文章需要使用，但我建议都加上</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> g</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #生成博客网页的文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #默认在本地的4000端口运行服务,一般用来本地测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4000</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #如果博客根目录是直接放置在服务器上，你可以使用这个来在指定端口运行你的hexo(4000改成你需要的端口)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> d</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 将你生成的文件推送至例如github等托管平台，此前记得配置好</span></span></code></pre></div><p>​ 国内网络原因，GitHub上常常难以打开外网网站，而通常又只有外国网站能够提供免费且全面的代码托管服务（gitee上也能托管，但是要实名人脸验证，还不能绑定自己的域名）。so ,优化教程依旧可以从<a href="https://www.fomal.cc/posts/b48804d5.html" target="_blank" rel="noreferrer">网站性能优化的一些小技巧</a>中抄作业。我使用gulp压缩文件后，我写一篇博客的步骤又多了一步：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gulp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> d</span></span></code></pre></div><p>如果不想校验，hexo s可以省略（仅针对代码托管的情况）。</p><h2 id="加一点点自动化" tabindex="-1">加一点点自动化 <a class="header-anchor" href="#加一点点自动化" aria-label="Permalink to &quot;加一点点自动化&quot;">​</a></h2><p>​ 发了几篇博客后，我忽然意识到，这其实都是固定的动作，完全可以用脚本来解决。</p><p>​ 于是我写了四个我经常用到的sh脚本（bat需要给权限好像，直接使用powershell我好像也得获得管理员权限才能使用hexo命令）。</p><p>给大家一个参考吧。首先在博客根目录下新建一个 打包测试.sh 的执行文件(标题随意)，右键使用笔记本打开、输入：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入脚本所在的目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dirname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 执行你的命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gulp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span></span></code></pre></div><p>或者新建文章：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">currentDate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;+%Y%m%d&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入脚本所在的目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dirname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建新文章</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$currentDate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 构造文章的完整路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">articlePath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./source/_posts/hello-world.md&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 Typora 打开文章文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> E:/blog/Typor1.6.7-x64-CN-Green/Typor1.6.7-x64-CN-Green/Typora/Typora.exe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$articlePath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span></code></pre></div><p>​ 因为这里使用的是脚本所在位置定位，所以不要随意更改脚本的位置，可以创建快捷方式放上桌面。</p><p>​ 到这里，其实写一篇hexo博客已经方便的大差不差了。当然，你直接使用vscode上的插件也许会直接内置这些按钮，vscode也有终端可以直接输入命令。也许vscode上也有跟picgo等软件相关联的插件。可因为惯性，我首先使用了typora开始编辑markdown文件后，就总是不想更改了，因此我写这些脚本也并非毫无意义吧。</p><h2 id="接下来-开始写作" tabindex="-1">接下来，开始写作 <a class="header-anchor" href="#接下来-开始写作" aria-label="Permalink to &quot;接下来，开始写作&quot;">​</a></h2><p>​ emm。。。我把我的hexo博客搭好后，又是安装主题，魔改主题，买了域名，备了案，买了自己国内的阿里云服务器，在服务器上配置环境，启用了github_page托管服务，又把github仓库转手托管到了vercel上（简单说就是提供加强版的githubpage），还使用GitHub+picgo+cloudflare_page的方式白piao了一个自己的图床，压缩转码了好多图片（封面，背景）。哈哈，万事俱备，只欠东风！然后<a href="http://quyoukly.com/" target="_blank" rel="noreferrer">quyoukly</a>跟我说：</p><p><img src="https://resource-un4.pages.dev/article/4a881447f898227c2d18a9a6c8259fa.jpg" alt=" "></p><p>​ 嗯，这时候我才发现：我打抄作业搭出来博客，但我根本没有内容要写T__T</p><p>​ 但我总觉得搭好了博客又不写东西实在不太好，那就写写吧。我就把最近把玩的一些&quot;网络玩具&quot;发出来。（那些玩具都放在标签&quot;瞎捣鼓&quot;里），甚至把我的结课论文都给扔上我的博客了。反正对我来说，这里不过是个也许除了我和我的一些很好的朋友之外再也不会有人知道的秘密空间。当然，知道是一回事，估计会打开这个博客的，也只有我自己了。自己在这个假装会有别人看见的空间对着不存在的陌生人分享一些无聊的东西，有点像鼠鼠🤣👈。</p><p>​ 有深度的人在进行有深度的实践后会得出有深度的见解和思想，但没深度的我所拥有的时间，在量上好像和那些人是一样的。他们在阅读、思考之后在博客上输出些有用的东西，他们会更注重内容与实质。我呢？啥也不会，读书静不下来，天天熬夜瞎忙乎也不知道自己在干嘛，但是又想在这里输出点东西，输出的东西当然只有流于形式或注重表面。所以我在我的每一篇文章上都加了封面😊。至于内容呢，就写点我搭博客闲的蛋疼写的软件吧！</p><h2 id="不太有东西的东西a" tabindex="-1">不太有东西的东西A <a class="header-anchor" href="#不太有东西的东西a" aria-label="Permalink to &quot;不太有东西的东西A&quot;">​</a></h2><p>​ 因为老想着加个封面图，每次创建一个新的md文件都要加上指定的<strong>Post Front-matter</strong>和填上对应的参数，况且写完封面和标题我就不知道要写什么了，于是无聊之神引导我让我写下了运行hexo脚本的软件，有以下几个特点：</p><ol><li>有一个图形界面，所有的脚本将会变成一个个按钮整齐的摆放（顺便增加了自定义脚本按钮，当时我老想着说不定有别人用，多来点客制化的东西。写完回顾我的软件。。。em，也许并没有期望做到的那么好）</li><li>一个博客文章的树状结构图，方便管理_source文件夹下的所有md文件</li><li>可以自定义编辑器，可以先选择你常使用的markdown文件编辑器，比如Typora,或者vscode还是浏览器、notepad++还是系统自带的记事本都可以。选好后每次在资源树状图下点击对应文章或者文件夹就能打开。</li><li>控制台选择性呈现：脚本都在按钮里，点了之后可能出现报错呀不能通过控制台看到了，因此我直接吧控制台输出的内容截取放在可控制是否显示的文本域上，有问题看两眼(我懒得在写对控制台输出结果的判断了)</li><li>有bug，但一定。。。应该。。。或许不是很多。反正在我电脑上运行出现的规律性bug我都尽量修复了。</li><li>新建文章可以自定义模板，指定md文件里的 $TIME$ 会换成当前时间，$TITLE$会换成文件名。忘记加一个修改model的按钮了。。。晚点吧，找软件打包目录下的model.md就能改</li></ol><h3 id="注意" tabindex="-1">注意： <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意：&quot;">​</a></h3><p>​ 上学期学的Java，下学期要学C ，py是上上个学期学的，但是最近可能要用到，就用py来复习了一遍。因为忘记怎么写py的软件了，软件的框架不是一开始定好的，是我后来想起来才改的（我刚开始还纳闷：怎么我的<code>def __init__()</code>不能执行初始化，原来压根没放在类里😂)，很多地方是直接用Find ReplaceAll改的，也就是说很多部分代码相当于我没仔细看过。有bug是正常，深呼吸😝</p><h3 id="演示图" tabindex="-1">演示图： <a class="header-anchor" href="#演示图" aria-label="Permalink to &quot;演示图：&quot;">​</a></h3><p>​ <img src="https://resource-un4.pages.dev/article/image-20240131002102412.png" alt="演示图"></p><p>链接:<a href="https://alist.57d02.cn/uselessTool" target="_blank" rel="noreferrer">uselessTool</a></p><h3 id="这次先这样" tabindex="-1">这次先这样 <a class="header-anchor" href="#这次先这样" aria-label="Permalink to &quot;这次先这样&quot;">​</a></h3>`,32)]))}const F=a(p,[["render",n]]);export{g as __pageData,F as default};
