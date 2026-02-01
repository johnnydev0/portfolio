import { useEffect } from 'react';

export function useConsoleMessage() {
  useEffect(() => {
    const styles = {
      title: 'font-size: 24px; font-weight: bold; color: #8b5cf6;',
      subtitle: 'font-size: 14px; color: #a1a1aa;',
      highlight: 'font-size: 12px; color: #22c55e;',
      warning: 'font-size: 12px; color: #eab308;',
      link: 'font-size: 12px; color: #3b82f6;',
    };

    console.clear();

    console.log(
      `%c
     ██╗██████╗ ██████╗
     ██║██╔══██╗██╔══██╗
     ██║██████╔╝██████╔╝
██   ██║██╔═══╝ ██╔═══╝
╚█████╔╝██║     ██║
 ╚════╝ ╚═╝     ╚═╝
`,
      'color: #8b5cf6; font-family: monospace;'
    );

    console.log('%c👋 Hey there, curious dev!', styles.title);
    console.log('%cYou found the console... but did you find all the easter eggs?', styles.subtitle);
    console.log('');
    console.log('%c🎮 Hint: Click my name 7 times in the hero...', styles.highlight);
    console.log('');
    console.log('%c⚠️  If you\'re here to inspect the code:', styles.warning);
    console.log('%c   The source code is available on GitHub!', styles.subtitle);
    console.log('%c   → github.com/johnnydev0', styles.link);
    console.log('');
    console.log('%c📬 Want to work together? joaoppessoa719@gmail.com', styles.subtitle);
    console.log('');
    console.log('%c─────────────────────────────────────', 'color: #3f3f46;');
    console.log('%cBuilt with React, TypeScript & lots of ☕', 'color: #71717a; font-style: italic;');
  }, []);
}
