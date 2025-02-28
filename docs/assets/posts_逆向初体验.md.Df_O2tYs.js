import{_ as a,c as p,b as t,p as r}from"./chunks/framework.h8ZaMGLV.js";const h=JSON.parse('{"title":"逆向初体验","description":"","frontmatter":{"title":"逆向初体验","date":"2024-10-31T19:14:44.000Z","tags":"瞎捣鼓","copyright":true},"headers":[],"relativePath":"posts/逆向初体验.md","filePath":"posts/逆向初体验.md","lastUpdated":1740504357000}'),i={name:"posts/逆向初体验.md"};function s(n,e,o,c,l,d){return t(),p("div",null,e[0]||(e[0]=[r('<h1 id="逆向初体验" tabindex="-1">逆向初体验 <a class="header-anchor" href="#逆向初体验" aria-label="Permalink to &quot;逆向初体验&quot;">​</a></h1><h2 id="缘由" tabindex="-1">缘由 <a class="header-anchor" href="#缘由" aria-label="Permalink to &quot;缘由&quot;">​</a></h2><p>​ 最近做实验，老师沿往年方案布置使用OPENTRACK列车仿真软件进行仿真实验。好巧不巧，这软件要授权，而且授权费特别贵（老师说一年二十万+）而且，只有实验室的几台电脑可以用。</p><p>​ 老师给的解决方案是：实验32位的虚拟机安装这个软件，并使用老师给的安装包，利用32位保存的漏洞保存实验数据。</p><p>​ 但实际使用时，我发现即使是32位系统也依旧无法完成数据保存：</p><p><img src="https://resource-un4.pages.dev/article/image-20241031192455169.png" alt="image-20241031192455169"></p><p>即CTRL+S等功能不能使用。（按下会有报错音）</p><p>同时，新建自定义引擎（Engine）无法保存，在自定义的Train中无法调用新建的引擎。</p><p>（后面发现，老师发的版本似乎也有人做过修改😎，后面提）</p><h2 id="逆向" tabindex="-1">逆向 <a class="header-anchor" href="#逆向" aria-label="Permalink to &quot;逆向&quot;">​</a></h2><p>​ 老师让我们使用32位bug绕开保存限制，正好32位的window压根不设防，很方便对程序进行反编译和断点，</p><p>拖进Peid查一下壳：</p><p><img src="https://resource-un4.pages.dev/article/image-20241031195234471.png" alt="image-20241031195234471"></p><p>纯正的味道😝，根本没加壳。</p><p>直接拖进OLLYDBG反编译看看源代码：</p><p><img src="https://resource-un4.pages.dev/article/image-20241031194222238.png" alt="image-20241031194222238"></p><p>也是很正确的找到了程序入口点，也没有异常代码。确认没壳无疑了。</p><h3 id="定点搜索" tabindex="-1">定点搜索 <a class="header-anchor" href="#定点搜索" aria-label="Permalink to &quot;定点搜索&quot;">​</a></h3><p>发现既然软件提示NOT Licensed</p><p>那么显示这段文字是就应该先判断是否有License，对这段字符进行ASCII码查找，找到很多出。一个个下断点后找到了打开软件时执行的判断函数：isLicensed -&gt; isBlockedLicensed-&gt;ismac64....</p><p>跳转很多，找不到最后检查落点。于是直接将isLicensed函数整个跳过（取反），结果：</p><p><img src="https://resource-un4.pages.dev/article/image-20241031200758321.png" alt="image-20241031200758321"></p><p>不仅功能用不了，甚至打不开了😢。遂放弃检查环节。</p><p>于是转变思路找Registration ，尝试在注册环节修改。果不其然，注册环节十分简单，在找了几十条字符串，断点测试相关代码后，在OTController registration OKpressed Master 下找到了注册相关的代码，发现注册按钮按下后（地址005A4080），完成校验的校验值放在于指向栈帧的底部的基址寄存器ebp下，然后使用了一个cmp byte指令[ebp-0x4]是否为0x01.</p><p><img src="https://resource-un4.pages.dev/article/image-20241031222648103.png" alt="image-20241031222648103"></p><p>​ 对这条指令进行修改，使校验结果位为0x00。</p><p>​ 打包可执行文件进行验证。随意输入验证码进行注册后：</p><p><img src="https://resource-un4.pages.dev/article/image-20241031202023519.png" alt="image-20241031202023519"></p><p>注册成功。但是程序应该是启动校验，功能还是用不了，懒得找执行启动校验的程序了。直接关闭软件重新打开。</p><p><img src="https://resource-un4.pages.dev/article/image-20241031202245699.png" alt="image-20241031202245699"></p><p>至此，解锁所有功能。</p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>将可执行文件放到64位机子上，也能够成功完成注册。</p><p>幸运的是，这个软件2002年的老软件，因此没有将校验程序藏在动态链接库dll中（pycharm2024就是在程序本体和库中多层校验），不然估计我这种新手还真搞不定。</p><h2 id="最后的最后" tabindex="-1">最后的最后 <a class="header-anchor" href="#最后的最后" aria-label="Permalink to &quot;最后的最后&quot;">​</a></h2><p>仅供交流学习使用，限24小时内删除。别抓我😭</p>',36)]))}const m=a(i,[["render",s]]);export{h as __pageData,m as default};
