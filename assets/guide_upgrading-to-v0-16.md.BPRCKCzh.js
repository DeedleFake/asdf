import{_ as a,c as s,o as n,ag as o}from"./chunks/framework.CkHWihve.js";const u=JSON.parse('{"title":"Upgrading to 0.16.0","description":"","frontmatter":{},"headers":[],"relativePath":"guide/upgrading-to-v0-16.md","filePath":"guide/upgrading-to-v0-16.md","lastUpdated":1739540267000}'),t={name:"guide/upgrading-to-v0-16.md"};function i(d,e,l,r,c,h){return n(),s("div",null,e[0]||(e[0]=[o('<h1 id="upgrading-to-0-16-0" tabindex="-1">Upgrading to 0.16.0 <a class="header-anchor" href="#upgrading-to-0-16-0" aria-label="Permalink to &quot;Upgrading to 0.16.0&quot;">​</a></h1><p>asdf versions 0.15.0 and older were written in Bash and distributed as a set of Bash scripts with the <code>asdf</code> function loaded into your shell. asdf version 0.16.0 is a complete rewrite of asdf in Go. Since it is a complete rewrite there are a <a href="#breaking-changes">number of breaking</a> changes and it is now a binary rather than a set of scripts.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Installation of version 0.16.0 is much simpler than previous versions of asdf. It&#39;s just three steps:</p><ul><li>Download the appropriate <code>asdf</code> binary for your operating system/architecture combo and place it in a directory on your <code>$PATH</code></li><li>Add <code>$ASDF_DATA_DIR/shims</code> to the front of your <code>$PATH</code>.</li><li>Optionally, if you previously had a customized location for asdf data, set <code>ASDF_DATA_DIR</code> to the directory you already had the old version installing plugins, versions, and shims.</li></ul><p>If your operating system&#39;s package manager already offers asdf 0.16.0 that is probably the best method for installing it. Upgrading asdf is now only possible via OS package managers and manual installation. There is no self-upgrade feature.</p><h3 id="upgrading-without-losing-data" tabindex="-1">Upgrading Without Losing Data <a class="header-anchor" href="#upgrading-without-losing-data" aria-label="Permalink to &quot;Upgrading Without Losing Data&quot;">​</a></h3><p>You can upgrade to the latest version of asdf without losing your existing install data. It&#39;s the same sequence of steps as above.</p><h4 id="_1-download-the-appropriate-asdf-binary-for-your-operating-system-architecture" tabindex="-1">1. Download the appropriate <code>asdf</code> binary for your operating system &amp; architecture <a class="header-anchor" href="#_1-download-the-appropriate-asdf-binary-for-your-operating-system-architecture" aria-label="Permalink to &quot;1. Download the appropriate `asdf` binary for your operating system &amp; architecture&quot;">​</a></h4><p>Download the binary and place it in a directory on your path. I chose to place the asdf binary in <code>$HOME/bin</code> and then added <code>$HOME/bin</code> to the front of my <code>$PATH</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># In .zshrc, .bashrc, etc...</span></span>\n<span class="line"><span>export PATH=&quot;$HOME/bin:$PATH&quot;</span></span></code></pre></div><h4 id="_2-set-asdf-data-dir" tabindex="-1">2. Set <code>ASDF_DATA_DIR</code> <a class="header-anchor" href="#_2-set-asdf-data-dir" aria-label="Permalink to &quot;2. Set `ASDF_DATA_DIR`&quot;">​</a></h4><p>Run <code>asdf info</code> and copy the line containing the <code>ASDF_DATA_DIR</code> variable:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>...</span></span>\n<span class="line"><span>ASDF_DATA_DIR=&quot;/home/myuser/.asdf&quot;</span></span>\n<span class="line"><span>...</span></span></code></pre></div><p>In your shell RC file (<code>.zshrc</code> if Zsh, <code>.bashrc</code> if Bash, etc...) add a line to the end setting <code>ASDF_DATA_DIR</code> to that same value:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ASDF_DATA_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/home/myuser/.asdf&quot;</span></span></code></pre></div><h4 id="_3-add-asdf-data-dir-shims-to-the-front-of-your-path" tabindex="-1">3. Add <code>$ASDF_DATA_DIR/shims</code> to the front of your <code>$PATH</code> <a class="header-anchor" href="#_3-add-asdf-data-dir-shims-to-the-front-of-your-path" aria-label="Permalink to &quot;3. Add `$ASDF_DATA_DIR/shims` to the front of your `$PATH`&quot;">​</a></h4><p>In your shell RC file (same file as step #2) add <code>$ASDF_DATA_DIR/shims</code> to the front of your path:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ASDF_DATA_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/home/myuser/.asdf&quot;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ASDF_DATA_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/shims:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span></code></pre></div><h4 id="_4-regenerate-shims" tabindex="-1">4. Regenerate Shims <a class="header-anchor" href="#_4-regenerate-shims" aria-label="Permalink to &quot;4. Regenerate Shims&quot;">​</a></h4><p>Verify that <code>asdf</code> command in your shell session is version 0.16.0+ by running <code>asdf --help</code>. If you still see an older version you will need to start a new shell session.</p><p>Once you&#39;ve verified the <code>asdf</code> command is the new version run <code>asdf reshim</code> to regenerate all shims. This is necessary as the old shims may still reference the old Bash version.</p><h3 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-label="Permalink to &quot;Testing&quot;">​</a></h3><p>If you aren&#39;t sure if the upgrade to 0.16.0 will break things for you can you can test by installing 0.16.0 in addition to your existing version as described above in &quot;Upgrading Without Losing Data&quot;. If it turns out that the upgrade to 0.16.0 breaks things for you simply remove the lines you added to your shell RC file.</p><h2 id="breaking-changes" tabindex="-1">Breaking Changes <a class="header-anchor" href="#breaking-changes" aria-label="Permalink to &quot;Breaking Changes&quot;">​</a></h2><h3 id="hyphenated-commands-have-been-removed" tabindex="-1">Hyphenated commands have been removed <a class="header-anchor" href="#hyphenated-commands-have-been-removed" aria-label="Permalink to &quot;Hyphenated commands have been removed&quot;">​</a></h3><p>asdf version 0.15.0 and earlier supported by hyphenated and non-hyphenated versions of certain commands. With version 0.16.0 only the non-hyphenated versions are supported. The affected commands:</p><ul><li><code>asdf list-all</code> -&gt; <code>asdf list all</code></li><li><code>asdf plugin-add</code> -&gt; <code>asdf plugin add</code></li><li><code>asdf plugin-list</code> -&gt; <code>asdf plugin list</code></li><li><code>asdf plugin-list-all</code> -&gt; <code>asdf plugin list all</code></li><li><code>asdf plugin-update</code> -&gt; <code>asdf plugin update</code></li><li><code>asdf plugin-remove</code> -&gt; <code>asdf plugin remove</code></li><li><code>asdf plugin-test</code> -&gt; <code>asdf plugin test</code></li><li><code>asdf shim-versions</code> -&gt; <code>asdf shimversions</code></li></ul><h3 id="asdf-global-and-asdf-local-commands-have-been-replaced-with-asdf-set" tabindex="-1"><code>asdf global</code> and <code>asdf local</code> commands have been replaced with <code>asdf set</code> <a class="header-anchor" href="#asdf-global-and-asdf-local-commands-have-been-replaced-with-asdf-set" aria-label="Permalink to &quot;`asdf global` and `asdf local` commands have been replaced with `asdf set`&quot;">​</a></h3><p><code>asdf global</code> and <code>asdf local</code> have been removed. The &quot;global&quot; and &quot;local&quot; terminology was wrong and also misleading. asdf doesn&#39;t actually support &quot;global&quot; versions that apply everywhere. Any version that was specified with <code>asdf global</code> could easily be overridden by a <code>.tool-versions</code> file in your current directory specifying a different version. This was confusing to users. The new <code>asdf set</code> behaves the same as <code>asdf local</code> by default, but also has flags for setting versions in the user&#39;s home directory (<code>--home</code>) and in an existing <code>.tool-versions</code> file in one of the parent directories (<code>--parent</code>). This new interface will hopefully convey a better understanding of how asdf resolves versions and provide equivalent functionality.</p><h3 id="asdf-update-command-has-been-removed" tabindex="-1"><code>asdf update</code> command has been removed <a class="header-anchor" href="#asdf-update-command-has-been-removed" aria-label="Permalink to &quot;`asdf update` command has been removed&quot;">​</a></h3><p>Updates can no longer be performed this way. Use your OS package manager or download the latest binary manually. Additionally, the <code>asdf update</code> command present in versions 0.15.0 and older cannot upgrade to version 0.16.0 because the install process has changed. <strong>You cannot upgrade to the latest Go implementation using <code>asdf update</code>.</strong></p><h3 id="asdf-shell-command-has-been-removed" tabindex="-1"><code>asdf shell</code> command has been removed <a class="header-anchor" href="#asdf-shell-command-has-been-removed" aria-label="Permalink to &quot;`asdf shell` command has been removed&quot;">​</a></h3><p>This command actually set an environment variable in the user&#39;s current shell session. It was able to do this because <code>asdf</code> was actually a shell function, not an executable. The new rewrite removes all shell code from asdf, and it is now a binary rather than a shell function, so setting environment variables directly in the shell is no longer possible.</p><h3 id="asdf-current-has-changed" tabindex="-1"><code>asdf current</code> has changed <a class="header-anchor" href="#asdf-current-has-changed" aria-label="Permalink to &quot;`asdf current` has changed&quot;">​</a></h3><p>Instead of three columns in the output, with the last being either the location the version is set or a suggested command that could be run to set or install a version. The third column has been split into two columns. The third column now only indicates the source of the version if it is set (typically either version file or environment variable) and the fourth is a boolean indicating whether the specified version is actually installed. If it is not installed, a suggested install command is shown.</p><h3 id="plugin-extension-commands-must-now-be-prefixed-with-cmd" tabindex="-1">Plugin extension commands must now be prefixed with <code>cmd</code> <a class="header-anchor" href="#plugin-extension-commands-must-now-be-prefixed-with-cmd" aria-label="Permalink to &quot;Plugin extension commands must now be prefixed with `cmd`&quot;">​</a></h3><p>Previously plugin extension commands could be run like this:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>asdf nodejs nodebuild --version</span></span></code></pre></div><p>Now they must be prefixed with <code>cmd</code> to avoid causing confusion with built-in commands:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>asdf cmd nodejs nodebuild --version</span></span></code></pre></div><h3 id="extension-commands-have-been-redesigned" tabindex="-1">Extension commands have been redesigned <a class="header-anchor" href="#extension-commands-have-been-redesigned" aria-label="Permalink to &quot;Extension commands have been redesigned&quot;">​</a></h3><p>There are a number of breaking changes for plugin extension commands:</p><ul><li>They must be runnable by <code>exec</code> syscall. If your extension commands are shell scripts in order to be run with <code>exec</code> they must start with a proper shebang line.</li><li>They can now be binaries or scripts in any language. It no longer makes sense to require a <code>.bash</code> extension as it is misleading.</li><li>They must have executable permission set.</li><li>They are no longer sourced by asdf as Bash scripts when they lack executable permission.</li></ul><p>Additionally, only the first argument after plugin name is used to determine the extension command to run. This means effectively there is the default <code>command</code> extension command that asdf defaults to when no command matching the first argument after plugin name is found. For example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>foo/</span></span>\n<span class="line"><span>  lib/commands/</span></span>\n<span class="line"><span>    command</span></span>\n<span class="line"><span>    command-bar</span></span>\n<span class="line"><span>    command-bat-man</span></span></code></pre></div><p>Previously these scripts would work like this:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ asdf cmd foo         # same as running `$ASDF_DATA_DIR/plugins/foo/lib/commands/command`</span></span>\n<span class="line"><span>$ asdf cmd foo bar     # same as running `$ASDF_DATA_DIR/plugins/foo/lib/commands/command-bar`</span></span>\n<span class="line"><span>$ asdf cmd foo bat man # same as running `$ASDF_DATA_DIR/plugins/foo/lib/commands/command-bat-man`</span></span></code></pre></div><p>Now:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ asdf cmd foo         # same as running `$ASDF_DATA_DIR/plugins/foo/lib/commands/command`</span></span>\n<span class="line"><span>$ asdf cmd foo bar     # same as running `$ASDF_DATA_DIR/plugins/foo/lib/commands/command-bar`</span></span>\n<span class="line"><span>$ asdf cmd foo bat man # same as running `$ASDF_DATA_DIR/plugins/foo/lib/commands/command-bat man`</span></span></code></pre></div><h3 id="executables-shims-resolve-to-must-runnable-by-syscall-exec" tabindex="-1">Executables Shims Resolve to Must Runnable by <code>syscall.Exec</code> <a class="header-anchor" href="#executables-shims-resolve-to-must-runnable-by-syscall-exec" aria-label="Permalink to &quot;Executables Shims Resolve to Must Runnable by `syscall.Exec`&quot;">​</a></h3><p>The most obvious example of this breaking change are scripts that lack a proper shebang line. asdf 0.15.0 and older were implemented in Bash, so as long it was an executable that could be executed with Bash it would run. This mean that scripts lacking a shebang could still be run by <code>asdf exec</code>. With asdf 0.16.x implemented in Go we now invoke executables via Go&#39;s <code>syscall.Exec</code> function, which cannot handle scripts lacking a shebang.</p><p>In practice this isn&#39;t much of a problem. Most shell scripts DO contain a shebang line. If a tool managed by asdf provides scripts that don&#39;t have a shebang line one will need to be added to them.</p><h3 id="custom-shim-templates-are-no-longer-supported" tabindex="-1">Custom shim templates are no longer supported <a class="header-anchor" href="#custom-shim-templates-are-no-longer-supported" aria-label="Permalink to &quot;Custom shim templates are no longer supported&quot;">​</a></h3><p>This was a rarely used feature. The only plugin maintained by the core team that used it was the Elixir plugin, and it no longer needs it. This feature was originally added so that shim that get evaluated by a program rather than executed contain code that is suitable for evaluation by a particular program (in the case of Elixir this was the <code>iex</code> shell). Upon further investigation it seems this feature only exists because the <code>PATH</code> for executables was sometimes improperly set to include the <strong>shims</strong> rather than the other <strong>executables</strong> for the selected version(s).</p>',55)]))}const m=a(t,[["render",i]]);export{u as __pageData,m as default};
