import path from 'node:path'
import { palette } from '../themes/palette'

const template = {
  name: 'Vesper Purple',
  type: 'dark',
  colors: {
    // https://code.visualstudio.com/api/references/theme-color
    // Base Colors
    focusBorder: palette.border[0],
    foreground: palette.foreground[0],
    disabledForeground: palette.disabled[0],
    'widget.shadow': palette.dark[0],
    'selection.background': palette.disabled[0],
    'sash.hoverBorder': palette.destructive[1],
    // Text colors
    'textCodeBlock.background': palette.dark[0],
    'textLink.activeForeground': palette.destructive[0],
    'textLink.foreground': palette.destructive[1],
    // Action colors
    'toolbar.hoverBackground': palette.dark[0],
    // Button control
    'button.background': palette.destructive[1],
    'button.hoverBackground': palette.destructive[1],
    // Dropdown control
    'dropdown.background': palette.dark[0],
    'dropdown.border': palette.border[0],
    // Input control
    'input.background': palette.dark[0],
    'input.border': palette.border[0],
    'inputOption.activeBackground': palette.dark[0],
    'inputOption.activeForeground': palette.light[0],
    'inputOption.activeBorder': palette.dark[1],
    // Scrollbar control
    'scrollbar.shadow': palette.dark[0],
    'scrollbarSlider.activeBackground': palette.border[0],
    'scrollbarSlider.background': palette.border[1],
    'scrollbarSlider.hoverBackground': palette.border[2],
    // Badge
    'badge.background': palette.border[0],
    'badge.foreground': palette.foreground[0],
    // Progress bar
    'progressBar.background': palette.destructive[0],
    // List and trees
    'list.activeSelectionBackground': palette.dark[0],
    'list.dropBackground': palette.border[0],
    'list.focusBackground': palette.border[0],
    'list.focusHighlightForeground': palette.primary[0],
    'list.focusOutline': palette.border[0],
    'list.highlightForeground': palette.primary[0],
    'list.hoverBackground': palette.dark[0],
    'list.inactiveSelectionBackground': palette.dark[0],
    'list.filterMatchBackground': palette.primary[1],
    'list.filterMatchBorder': palette.primary[0],
    // Activity Bar
    'activityBar.background': palette.dark[0],
    'activityBar.foreground': palette.foreground[0],
    'activityBar.border': palette.border[0],
    'activityBarBadge.foreground': palette.dark[0],
    'activityBarBadge.background': palette.primary[0],
    'activityBar.activeBorder': palette.destructive[0],
    // Side bar
    'sideBar.background': palette.dark[0],
    'sideBar.border': palette.border[0],
    'sideBarSectionHeader.background': palette.dark[0],
    'sideBarSectionHeader.border': palette.border[0],
    // Minimap
    'minimap.findMatchHighlight': palette.primary[1],
    'minimap.selectionHighlight': palette.primary[1],
    'minimap.errorHighlight': palette.destructive[0],
    'minimap.background': palette.dark[0],
    'minimapSlider.background': palette.border[0],
    'minimapSlider.hoverBackground': palette.border[1],
    'minimapSlider.activeBackground': palette.border[2],
    // Editor Groups & Tabs
    'editorGroupHeader.tabsBackground': palette.dark[0],
    'editorGroupHeader.tabsBorder': palette.border[0],
    'tab.activeBackground': palette.dark[0],
    'tab.activeBorder': palette.destructive[0],
    'tab.inactiveBackground': palette.dark[0],
    'tab.border': palette.border[0],
    // Editor colors
    'editor.background': palette.dark[0],
    'editor.foreground': palette.light[0],
    'editorLineNumber.foreground': palette.dark[1],
    'editorLineNumber.activeForeground': palette.light[1],
    'editorCursor.foreground': palette.destructive[0],
    'editor.selectionBackground': palette.border[1],
    'editor.selectionHighlightBorder': palette.border[2],
    'editor.wordHighlightBackground': palette.border[0],
    'editor.wordHighlightStrongBackground': palette.border[0],
    'editor.findMatchBackground': palette.primary[1],
    'editor.findMatchHighlightBackground': palette.primary[1],
    'editor.findMatchHighlightBorder': palette.primary[1],
    'editor.findMatchBorder': palette.primary[0],
    'searchEditor.findMatchBorder': palette.primary[0],
    'editor.hoverHighlightBackground': palette.border[0],
    'editor.lineHighlightBackground': palette.border[1],
    'editorLink.activeForeground': palette.destructive[0],
    'editorWhitespace.foreground': palette.border[0],
    'editorIndentGuide.background': palette.border[0],
    'editorIndentGuide.activeBackground': palette.border[1],
    'editorInlayHint.background': palette.border[0],
    'editorInlayHint.foreground': palette.border[2],
    /// Codelens
    'editorCodeLens.foreground': palette.dark[1],
    /// Bracket pair colorization
    'editorBracketHighlight.foreground1': palette.foreground[0],
    'editorBracketHighlight.foreground2': palette.foreground[0],
    'editorBracketHighlight.foreground3': palette.foreground[0],
    'editorBracketHighlight.foreground4': palette.foreground[0],
    /// Errors and warnings
    'editorError.foreground': palette.destructive[0],
    'editorWarning.foreground': palette.warning[0],
    'editorInfo.foreground': palette.primary[1],
    /// The gutter contains the glyph margins and the line numbers
    'editorGutter.modifiedBackground': palette.primary[1],
    'editorGutter.addedBackground': palette.primary[1],
    'editorGutter.deletedBackground': palette.destructive[1],
    // Diff editor colors
    'diffEditor.insertedTextBackground': palette.primary[1],
    'diffEditor.removedTextBackground': palette.destructive[1],
    'diffEditor.border': palette.border[0],
    'diffEditor.diagonalFill': palette.border[0],
    'diffEditor.insertedLineBackground': palette.primary[1],
    'diffEditor.removedLineBackground': palette.destructive[1],
    // Editor widget colors
    'editorWidget.background': palette.dark[0],
    'editorSuggestWidget.background': palette.dark[0],
    'editorSuggestWidget.selectedBackground': palette.dark[0],
    'editorHoverWidget.statusBarBackground': palette.dark[0],
    'editorStickyScrollHover.background': palette.dark[0],
    // Peek view colors
    'peekView.border': palette.border[0],
    'peekViewEditor.background': palette.dark[0],
    'peekViewEditor.matchHighlightBackground': palette.primary[1],
    'peekViewEditor.matchHighlightBorder': palette.primary[0],
    'peekViewResult.matchHighlightBackground': palette.primary[1],
    'peekViewResult.selectionBackground': palette.primary[1],
    'peekViewResult.background': palette.dark[0],
    'peekViewTitle.background': palette.dark[0],
    'peekViewEditorStickScroll.background': palette.dark[0],
    // Merge conflicts colors
    'merge.currentHeaderBackground': palette.primary[1],
    'merge.currentContentBackground': palette.primary[1],
    'merge.incomingHeaderBackground': palette.primary[1],
    'merge.incomingContentBackground': palette.primary[1],
    // Panel colors
    'panel.background': palette.dark[0],
    // Status bar colors
    'statusBar.background': palette.dark[0],
    'statusBar.foreground': palette.foreground[0],
    'statusBar.border': palette.border[0],
    'statusBar.debuggingBackground': palette.primary[0],
    'statusBar.debuggingForeground': palette.dark[0],
    'statusBar.noFolderBackground': palette.dark[0],
    'statusBar.noFolderForeground': palette.foreground[0],
    'statusBar.focusBorder': palette.dark[0],
    'statusBarItem.prominentBackground': palette.primary[0],
    'statusBarItem.prominentForeground': palette.dark[0],
    'statusBarItem.remoteBackground': palette.primary[0],
    'statusBarItem.remoteForeground': palette.dark[0],
    'statusBarItem.errorBackground': palette.destructive[0],
    'statusBarItem.errorForeground': palette.dark[0],
    'statusBarItem.warningBackground': palette.warning[1],
    'statusBarItem.warningForeground': palette.dark[0],
    // Title bar colors
    'titleBar.activeBackground': palette.dark[0],
    'titleBar.inactiveBackground': palette.dark[0],
    'titleBar.border': palette.border[0],
    // Menu bar colors
    'menu.foreground': palette.foreground[0],
    'menu.background': palette.dark[0],
    'menu.separatorBackground': palette.border[0],
    // Command Center colors
    'commandCenter.activeBackground': palette.border[0],
    'commandCenter.border': palette.border[1],
    // Banner colors
    'banner.foreground': palette.foreground[0],
    'banner.background': palette.dark[0],
    // Quick picker colors
    'pickerGroup.foreground': palette.primary[0],
    'quickInput.background': palette.dark[0],
    // Integrated Terminal colors
    'terminal.background': palette.dark[0],
    'terminal.foreground': palette.foreground[0],
    'terminal.ansiBlack': palette.ansi.black[0],
    'terminal.ansiBlue': palette.ansi.blue[0],
    'terminal.ansiBrightBlack': palette.ansi.black[1],
    'terminal.ansiBrightBlue': palette.ansi.blue[1],
    'terminal.ansiBrightCyan': palette.ansi.cyan[1],
    'terminal.ansiBrightGreen': palette.ansi.green[1],
    'terminal.ansiBrightMagenta': palette.ansi.magenta[1],
    'terminal.ansiBrightRed': palette.ansi.red[1],
    'terminal.ansiBrightWhite': palette.ansi.white[1],
    'terminal.ansiBrightYellow': palette.ansi.yellow[1],
    'terminal.ansiCyan': palette.ansi.cyan[0],
    'terminal.ansiGreen': palette.ansi.green[0],
    'terminal.ansiMagenta': palette.ansi.magenta[0],
    'terminal.ansiRed': palette.ansi.red[0],
    'terminal.ansiWhite': palette.ansi.white[0],
    'terminal.ansiYellow': palette.ansi.yellow[0],
    'terminal.selectionBackground': palette.dark[0],
    'terminal.tab.activeBorder': palette.primary[0],
    // Git colors
    'gitDecoration.addedResourceForeground': palette.primary[0],
    'gitDecoration.modifiedResourceForeground': palette.warning[0],
    'gitDecoration.deletedResourceForeground': palette.destructive[0],
    'gitDecoration.renamedResourceForeground': palette.primary[1],
    'gitDecoration.ignoredResourceForeground': palette.border[2],
    'gitDecoration.conflictingResourceForeground': palette.warning[1],
    // Breadcrumbs colors
    'breadcrumb.foreground': palette.foreground[0],
  },
  tokenColors: [
    {
      scope: ['meta.embedded', 'source.groovy.embedded', 'string meta.image.inline.markdown'],
      settings: {
        foreground: palette.light[1],
      },
    },
    {
      scope: 'emphasis',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'strong',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: 'header',
      settings: {
        foreground: palette.primary[0],
      },
    },
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        foreground: palette.token.comment[0],
      },
    },
    {
      scope: [
        'punctuation.definition',
        'punctuation.definition.quote.begin.markdown',
        'punctuation.definition.tag',
        'punctuation.section.embedded',
      ],
      settings: {
        foreground: palette.token.comment[0],
      },
    },
    {
      scope: 'constant.language',
      settings: {
        foreground: palette.primary[0], // TODO
      },
    },
    {
      scope: [
        'constant.numeric',
        'variable.other.enummember',
        'keyword.operator.plus.exponent',
        'keyword.operator.minus.exponent',
      ],
      settings: {
        foreground: palette.token.number[0],
      },
    },
    {
      scope: 'constant.regexp',
      settings: {
        foreground: palette.token.constant[0],
      },
    },
    {
      scope: ['entity.name.tag', 'entity.name.tag.css', 'support.class.component'],
      settings: {
        foreground: palette.primary[0],
      },
    },
    {
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: palette.primary[0],
      },
    },
    {
      scope: [
        'entity.other.attribute-name.class.css',
        'entity.other.attribute-name.class.mixin.css',
        'entity.other.attribute-name.id.css',
        'entity.other.attribute-name.parent-selector.css',
        'entity.other.attribute-name.pseudo-class.css',
        'entity.other.attribute-name.pseudo-element.css',
        'source.css.less entity.other.attribute-name.id',
        'entity.other.attribute-name.scss',
      ],
      settings: {
        foreground: palette.primary[0],
      },
    },
    {
      scope: 'invalid',
      settings: {
        foreground: palette.destructive[0],
      },
    },
    {
      scope: 'markup.underline',
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      scope: 'string.other.link',
      settings: {
        foreground: palette.primary[0],
      },
    },
    {
      scope: 'markup.underline.link',
      settings: {
        foreground: palette.disabled[0],
      },
    },
    {
      scope: 'markup.bold',
      settings: {
        fontStyle: 'bold',
        foreground: palette.token.variable[0],
      },
    },
    {
      scope: 'markup.heading',
      settings: {
        fontStyle: 'bold',
        foreground: palette.token.string[0],
      },
    },
    {
      scope: 'markup.italic',
      settings: {
        fontStyle: 'italic',
        foreground: palette.token.variable[0],
      },
    },
    {
      scope: 'markup.strikethrough',
      settings: {
        fontStyle: 'strikethrough',
      },
    },
    {
      scope: 'markup.quote',
      settings: {
        foreground: palette.token.operator[0],
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.inserted',
      settings: {
        foreground: palette.token.string[0],
      },
    },
    {
      scope: 'markup.deleted',
      settings: {
        foreground: palette.destructive[0],
      },
    },
    {
      scope: 'markup.changed',
      settings: {
        foreground: palette.primary[0],
      },
    },
    {
      scope: 'punctuation.definition.list.begin.markdown',
      settings: {
        foreground: palette.primary[0],
      },
    },
    {
      scope: 'markup.inline.raw',
      settings: {
        foreground: palette.token.number[0],
      },
    },
    {
      scope: ['meta.preprocessor', 'entity.name.function.preprocessor'],
      settings: {
        foreground: palette.primary[0],
      },
    },
    {
      scope: 'meta.preprocessor.string',
      settings: {
        foreground: palette.token.string[0],
      },
    },
    {
      scope: 'meta.preprocessor.numeric',
      settings: {
        foreground: palette.token.number[0],
      },
    },
    {
      scope: 'meta.structure.dictionary.key.python',
      settings: {
        foreground: palette.token.variable[0],
      },
    },
    {
      scope: 'meta.diff.header',
      settings: {
        foreground: palette.primary[0],
      },
    },
    {
      scope: 'storage',
      settings: {
        foreground: palette.token.operator[0],
      },
    },
    {
      scope: 'storage.type',
      settings: {
        foreground: palette.token.operator[0],
      },
    },
    {
      scope: ['storage.modifier', 'keyword.operator.noexcept'],
      settings: {
        foreground: palette.token.operator[0],
      },
    },
    {
      scope: ['string', 'meta.embedded.assembly', 'punctuation.definition.string'],
      settings: {
        foreground: palette.token.string[0],
      },
    },
    {
      scope: 'string.tag',
      settings: {
        foreground: palette.token.string[0],
      },
    },
    {
      scope: 'string.value',
      settings: {
        foreground: palette.token.string[0],
      },
    },
    {
      scope: 'string.regexp',
      settings: {
        foreground: palette.token.number[0],
      },
    },
    {
      name: 'Reset JavaScript string interpolation expression',
      scope: ['meta.template.expression'],
      settings: {
        foreground: palette.light[1],
      },
    },
    {
      scope: [
        'support.type.vendored.property-name',
        'support.type.property-name',
        'variable.css',
        'variable.scss',
        'variable.other.less',
        'source.coffee.embedded',
      ],
      settings: {
        foreground: palette.token.variable[0],
      },
    },
    {
      scope: 'keyword',
      settings: {
        foreground: palette.token.operator[0],
      },
    },
    {
      scope: 'keyword.control',
      settings: {
        foreground: palette.token.operator[0],
      },
    },
    {
      scope: 'keyword.operator',
      settings: {
        foreground: palette.token.operator[0],
      },
    },
    {
      scope: [
        'keyword.operator.new',
        'keyword.operator.expression',
        'keyword.operator.cast',
        'keyword.operator.sizeof',
        'keyword.operator.alignof',
        'keyword.operator.typeid',
        'keyword.operator.alignas',
        'keyword.operator.instanceof',
        'keyword.operator.logical.python',
        'keyword.operator.wordlike',
      ],
      settings: {
        foreground: palette.token.operator[0],
      },
    },
    {
      scope: 'keyword.other.unit',
      settings: {
        foreground: palette.token.operator[0],
      },
    },
    {
      scope: ['punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php'],
      settings: {
        foreground: palette.token.operator[0],
      },
    },
    {
      scope: 'support.function.git-rebase',
      settings: {
        foreground: palette.primary[0],
      },
    },
    {
      scope: 'constant.sha.git-rebase',
      settings: {
        foreground: palette.token.number[0],
      },
    },
    {
      name: 'coloring of the Java import and package identifiers',
      scope: ['storage.modifier.import.java', 'variable.language.wildcard.java', 'storage.modifier.package.java'],
      settings: {
        foreground: palette.token.string[0],
      },
    },
    {
      name: 'this.self',
      scope: 'variable.language',
      settings: {
        fontStyle: 'italic',
        foreground: palette.token.operator[0],
      },
    },
    {
      name: 'Function declarations',
      scope: [
        'entity.name.function',
        'support.function',
        'support.constant.handlebars',
        'source.powershell variable.other.member',
        'entity.name.operator.custom-literal', // See https://en.cppreference.com/w/cpp/language/user_literal
      ],
      settings: {
        foreground: palette.primary[0],
      },
    },
    {
      name: 'Types declaration and references',
      scope: [
        'support.class',
        'support.type',
        'entity.name.type',
        'entity.name.namespace',
        'entity.other.attribute',
        'entity.name.scope-resolution',
        'entity.name.class',
        'storage.type.numeric.go',
        'storage.type.byte.go',
        'storage.type.boolean.go',
        'storage.type.string.go',
        'storage.type.uintptr.go',
        'storage.type.error.go',
        'storage.type.rune.go',
        'storage.type.cs',
        'storage.type.generic.cs',
        'storage.type.modifier.cs',
        'storage.type.variable.cs',
        'storage.type.annotation.java',
        'storage.type.generic.java',
        'storage.type.java',
        'storage.type.object.array.java',
        'storage.type.primitive.array.java',
        'storage.type.primitive.java',
        'storage.type.token.java',
        'storage.type.groovy',
        'storage.type.annotation.groovy',
        'storage.type.parameters.groovy',
        'storage.type.generic.groovy',
        'storage.type.object.array.groovy',
        'storage.type.primitive.array.groovy',
        'storage.type.primitive.groovy',
      ],
      settings: {
        foreground: palette.primary[0],
      },
    },
    {
      name: 'Types declaration and references, TS grammar specific',
      scope: [
        'meta.type.cast.expr',
        'meta.type.new.expr',
        'support.constant.math',
        'support.constant.dom',
        'support.constant.json',
        'entity.other.inherited-class',
      ],
      settings: {
        foreground: palette.primary[0],
      },
    },
    {
      name: 'Control flow / Special keywords',
      scope: [
        'keyword.control',
        'source.cpp keyword.operator.new',
        'keyword.operator.delete',
        'keyword.other.using',
        'keyword.other.operator',
        'entity.name.operator',
      ],
      settings: {
        foreground: palette.token.operator[0],
      },
    },
    {
      name: 'Variable and parameter name',
      scope: [
        'variable',
        'meta.definition.variable.name',
        'support.variable',
        'entity.name.variable',
        'constant.other.placeholder', // placeholders in strings
      ],
      settings: {
        foreground: palette.token.variable[0],
      },
    },
    {
      name: 'Constants and enums',
      scope: ['variable.other.constant', 'variable.other.enummember'],
      settings: {
        foreground: palette.token.constant[0],
      },
    },
    {
      name: 'Object keys, TS grammar specific',
      scope: ['meta.object-literal.key'],
      settings: {
        foreground: palette.token.variable[0],
      },
    },
    {
      name: 'CSS property value',
      scope: [
        'support.constant.property-value',
        'support.constant.font-name',
        'support.constant.media-type',
        'support.constant.media',
        'constant.other.color.rgb-value',
        'constant.other.rgb-value',
        'support.constant.color',
      ],
      settings: {
        foreground: palette.token.string[0],
      },
    },
    {
      name: 'Regular expression groups',
      scope: [
        'punctuation.definition.group.regexp',
        'punctuation.definition.group.assertion.regexp',
        'punctuation.definition.character-class.regexp',
        'punctuation.character.set.begin.regexp',
        'punctuation.character.set.end.regexp',
        'keyword.operator.negation.regexp',
        'support.other.parenthesis.regexp',
      ],
      settings: {
        foreground: palette.token.string[0],
      },
    },
    {
      scope: [
        'constant.character.character-class.regexp',
        'constant.other.character-class.set.regexp',
        'constant.other.character-class.regexp',
        'constant.character.set.regexp',
      ],
      settings: {
        foreground: palette.token.number[0],
      },
    },
    {
      scope: ['keyword.operator.or.regexp', 'keyword.control.anchor.regexp'],
      settings: {
        foreground: palette.primary[0],
      },
    },
    {
      scope: 'keyword.operator.quantifier.regexp',
      settings: {
        foreground: palette.primary[0],
      },
    },
    {
      scope: 'constant.character',
      settings: {
        foreground: palette.primary[0],
      },
    },
    {
      scope: 'constant.character.escape',
      settings: {
        foreground: palette.primary[0],
      },
    },
    {
      scope: 'entity.name.label',
      settings: {
        foreground: palette.token.default[0],
      },
    },
  ],
  semanticHighlighting: true,
  semanticTokenColors: {
    newOperator: palette.token.operator[0],
    stringLiteral: palette.token.string[0],
    customLiteral: palette.token.number[0],
    numberLiteral: palette.token.number[0],
  },
}

const targetPath = path.resolve(__dirname, '../themes/vesper-purple-color-theme.json')
await Bun.write(targetPath, JSON.stringify(template, null, 2))
