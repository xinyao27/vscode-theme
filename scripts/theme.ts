import { Themes } from './colors'
import { createThemeHelpers, toArray } from './helper'
import type { GetThemeOptions } from './helper'

export default function getTheme(options: GetThemeOptions) {
  const { pick, v, colors } = createThemeHelpers(options)

  const foreground = v('foreground')
  const secondaryForeground = v('secondaryForeground')
  const activeForeground = v('activeForeground')
  const primary = v('primary')

  const border = v('border')
  const background = v('background')
  const activeBackground = v('activeBackground')

  const punctuation = v('punctuation')

  const selectionBackground = v('selectionBackground')
  const selectionBackgroundActive = v('selectionBackgroundActive')
  const selectionBackgroundInActive = v('selectionBackgroundInActive')

  const theme = {
    name: options.name,
    base: pick({ light: 'vs', dark: 'vs-dark' }),
    colors: {
      contrastActiveBorder: '#ffffff00',
      contrastBorder: '#ffffff00',

      focusBorder: primary,
      foreground,
      descriptionForeground: secondaryForeground,
      errorForeground: v('red'),
      'sash.hoverBorder': primary,

      'textLink.foreground': primary,
      'textLink.activeForeground': primary,
      'textBlockQuote.background': background,
      'textBlockQuote.border': border,
      'textCodeBlock.background': background,
      'textPreformat.foreground': colors.gray['600'],
      'textSeparator.foreground': colors.gray['300'],

      'button.background': primary,
      'button.foreground': background,
      'button.hoverBackground': primary,

      'checkbox.background': activeBackground,
      'checkbox.border': pick({ light: colors.gray['300'], dark: colors.gray['100'] }),

      'dropdown.background': background,
      'dropdown.border': border,
      'dropdown.foreground': foreground,
      'dropdown.listBackground': activeBackground,

      'input.background': activeBackground,
      'input.border': border,
      'input.foreground': foreground,
      'input.placeholderForeground': secondaryForeground,
      'inputOption.activeBackground': v('ignored'),

      'badge.foreground': background,
      'badge.background': secondaryForeground,

      'progressBar.background': primary,

      'titleBar.activeForeground': activeForeground,
      'titleBar.activeBackground': background,
      'titleBar.inactiveForeground': colors.gray['500'],
      'titleBar.inactiveBackground': background,
      'titleBar.border': border,

      'activityBar.foreground': foreground,
      'activityBar.inactiveForeground': v('ignored'),
      'activityBar.background': background,
      'activityBarBadge.foreground': background,
      'activityBarBadge.background': activeForeground,
      'activityBar.activeBorder': primary,
      'activityBar.border': border,

      'sideBar.foreground': activeForeground,
      'sideBar.background': background,
      'sideBar.border': border,
      'sideBarTitle.foreground': foreground,
      'sideBarSectionHeader.foreground': foreground,
      'sideBarSectionHeader.background': background,
      'sideBarSectionHeader.border': border,

      'list.hoverForeground': foreground,
      'list.inactiveSelectionForeground': foreground,
      'list.activeSelectionForeground': foreground,
      'list.hoverBackground': activeBackground,
      'list.inactiveSelectionBackground': activeBackground,
      'list.activeSelectionBackground': activeBackground,
      'list.inactiveFocusBackground': background,
      'list.focusBackground': activeBackground,
      'list.focusOutline': activeBackground,
      'list.highlightForeground': primary,
      'list.inactiveFocusOutline': border,

      'tree.indentGuidesStroke': pick({ light: colors.gray['200'], dark: colors.gray['100'] }),

      'activityBarTop.activeBorder': primary,

      'notificationCenterHeader.foreground': colors.gray['500'],
      'notificationCenterHeader.background': background,
      'notifications.foreground': foreground,
      'notifications.background': background,
      'notifications.border': border,
      'notificationsErrorIcon.foreground': v('red'),
      'notificationsWarningIcon.foreground': v('orange'),
      'notificationsInfoIcon.foreground': v('blue'),

      'pickerGroup.border': border,
      'pickerGroup.foreground': foreground,
      'quickInput.background': background,
      'quickInput.foreground': foreground,
      'quickInputList.focusBackground': activeBackground,

      'statusBar.foreground': activeForeground,
      'statusBar.background': background,
      'statusBar.border': border,
      'statusBar.noFolderBackground': background,
      'statusBar.debuggingBackground': activeBackground,
      'statusBar.debuggingForeground': activeForeground,
      'statusBarItem.prominentBackground': activeBackground,

      'editorGroupHeader.tabsBackground': background,
      'editorGroupHeader.tabsBorder': border,
      'editorGroup.border': border,

      'tab.activeForeground': foreground,
      'tab.inactiveForeground': colors.gray['500'],
      'tab.inactiveBackground': background,
      'tab.activeBackground': background,
      'tab.hoverBackground': activeBackground,
      'tab.unfocusedHoverBackground': background,
      'tab.border': border,
      'tab.unfocusedActiveBorderTop': border,
      'tab.activeBorder': border,
      'tab.unfocusedActiveBorder': border,
      'tab.activeBorderTop': primary,

      'breadcrumb.foreground': colors.gray['500'],
      'breadcrumb.focusForeground': foreground,
      'breadcrumb.background': activeBackground,
      'breadcrumb.activeSelectionForeground': selectionBackgroundActive,
      'breadcrumbPicker.background': background,

      'editor.foreground': foreground,
      'editor.background': background,
      'editorWidget.background': background,
      'editor.foldBackground': pick({ light: '#22222210', dark: '#eeeeee10' }),
      'editor.lineHighlightBackground': activeBackground,
      'editorLineNumber.foreground': v('ignored'),
      'editorLineNumber.activeForeground': activeForeground,
      'editorIndentGuide.background': pick({ light: '#00000015', dark: '#ffffff15' }),
      'editorIndentGuide.activeBackground': pick({ light: '#00000030', dark: '#ffffff30' }),
      'editorWhitespace.foreground': pick({ light: '#00000015', dark: '#ffffff15' }),
      // 'editorCursor.foreground': primary,

      'editor.findMatchBackground': v('yellow', '10'),
      'editor.findMatchHighlightBackground': v('yellow', '20'),
      'editor.inactiveSelectionBackground': selectionBackgroundInActive,
      'editor.selectionBackground': selectionBackground,
      'editor.selectionHighlightBackground': selectionBackgroundInActive,
      'editor.wordHighlightBackground': pick({ light: '#1c6b4805', dark: '#1c6b4805' }),
      'editor.wordHighlightStrongBackground': pick({ light: '#1c6b4810', dark: '#1c6b4810' }),
      'editorBracketMatch.background': pick({ light: '#1c6b4820', dark: '#4d937520' }),

      'diffEditor.insertedTextBackground': pick({ light: '#1c6b4830', dark: '#4d937550' }),
      'diffEditor.removedTextBackground': pick({ light: '#ab595940', dark: '#ab595950' }),

      'scrollbar.shadow': pick({ light: '#6a737d33', dark: '#0000' }),
      'scrollbarSlider.background': v('faded'),
      'scrollbarSlider.hoverBackground': v('ignored'),
      'scrollbarSlider.activeBackground': v('ignored'),
      'editorOverviewRuler.border': colors.white,

      'panel.background': background,
      'panel.border': border,
      'panelTitle.activeBorder': primary,
      'panelTitle.activeForeground': foreground,
      'panelTitle.inactiveForeground': colors.gray['500'],
      'panelInput.border': pick({ light: colors.gray['200'], dark: colors.gray['100'] }),

      'terminal.foreground': foreground,
      'terminal.selectionBackground': selectionBackground,
      'terminal.ansiBrightBlack': pick({ light: '#aaaaaa', dark: '#777777' }),
      'terminal.ansiBrightBlue': v('blue'),
      'terminal.ansiBrightCyan': v('cyan'),
      'terminal.ansiBrightGreen': v('green'),
      'terminal.ansiBrightMagenta': v('magenta'),
      'terminal.ansiBrightRed': v('red'),
      'terminal.ansiBrightWhite': pick({ light: '#dddddd', dark: '#ffffff' }),
      'terminal.ansiBrightYellow': v('yellow'),
      'terminal.ansiBlack': pick({ light: Themes.background[0], dark: Themes.foreground[1] }),
      'terminal.ansiBlue': v('blue'),
      'terminal.ansiCyan': v('cyan'),
      'terminal.ansiGreen': v('green'),
      'terminal.ansiMagenta': v('magenta'),
      'terminal.ansiRed': v('red'),
      'terminal.ansiWhite': '#dbd7ca',
      'terminal.ansiYellow': v('yellow'),

      'gitDecoration.addedResourceForeground': v('green'),
      'gitDecoration.modifiedResourceForeground': v('blue'),
      'gitDecoration.deletedResourceForeground': v('red'),
      'gitDecoration.untrackedResourceForeground': v('cyan'),
      'gitDecoration.ignoredResourceForeground': v('ignored'),
      'gitDecoration.conflictingResourceForeground': v('orange'),
      'gitDecoration.submoduleResourceForeground': v('secondaryForeground'),

      'editorGutter.modifiedBackground': v('blue'),
      'editorGutter.addedBackground': v('green'),
      'editorGutter.deletedBackground': v('red'),

      'editorBracketHighlight.foreground1': v('cyan'),
      'editorBracketHighlight.foreground2': v('green'),
      'editorBracketHighlight.foreground3': v('orange'),
      'editorBracketHighlight.foreground4': v('magenta'),
      'editorBracketHighlight.foreground5': v('yellow'),
      'editorBracketHighlight.foreground6': v('blue'),

      'debugToolBar.background': background,
      'editor.stackFrameHighlightBackground': pick({ light: colors.yellow['100'], dark: colors.yellow['800'] }),
      'editor.focusedStackFrameHighlightBackground': pick({ light: colors.yellow['200'], dark: colors.yellow['800'] }),

      'peekViewEditor.matchHighlightBackground': pick({ dark: colors.yellow['800'], light: undefined }),
      'peekViewResult.matchHighlightBackground': pick({ dark: colors.yellow['800'], light: undefined }),
      'peekViewEditor.background': background,
      'peekViewResult.background': background,

      'settings.headerForeground': foreground,
      'settings.modifiedItemIndicator': primary,
      'welcomePage.buttonBackground': colors.gray['100'],
      'welcomePage.buttonHoverBackground': colors.gray['200'],

      'problemsErrorIcon.foreground': v('red'),
      'problemsWarningIcon.foreground': v('orange'),
      'problemsInfoIcon.foreground': v('blue'),

      'editorError.foreground': v('red'),
      'editorWarning.foreground': v('orange'),
      'editorInfo.foreground': v('blue'),
      'editorHint.foreground': v('green'),

      'editorGutter.commentRangeForeground': v('ignored'),
      'editorGutter.foldingControlForeground': v('secondaryForeground'),

      'editorInlayHint.foreground': punctuation,
      'editorInlayHint.background': '#00000000',

      'editorStickyScroll.background': activeBackground,
      'editorStickyScrollHover.background': activeBackground,

      'menu.separatorBackground': border,
    },
    semanticHighlighting: true,
    semanticTokenColors: {
      namespace: v('namespace'),
      property: v('property'),
      interface: v('interface'),
      type: v('interface'),
      class: v('class'),
    },
    tokenColors: [
      {
        scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
        settings: {
          foreground: v('comment'),
        },
      },
      {
        scope: [
          'delimiter.bracket',
          'delimiter',
          'invalid.illegal.character-not-allowed-here.html',
          'keyword.operator.rest',
          'keyword.operator.spread',
          'keyword.operator.type.annotation',
          'keyword.operator.relational',
          'keyword.operator.assignment',
          'keyword.operator.type',
          'meta.brace',
          'meta.tag.block.any.html',
          'meta.tag.inline.any.html',
          'meta.tag.structure.input.void.html',
          'meta.type.annotation',
          'meta.embedded.block.github-actions-expression',
          'storage.type.function.arrow',
          'meta.objectliteral.ts',
          'punctuation',
        ],
        settings: {
          foreground: punctuation,
        },
      },
      {
        scope: ['constant', 'entity.name.constant', 'variable.language', 'meta.definition.variable'],
        settings: {
          foreground: v('constant'),
        },
      },
      {
        scope: ['entity', 'entity.name'],
        settings: {
          foreground: v('function'),
        },
      },
      {
        scope: 'variable.parameter.function',
        settings: {
          foreground,
        },
      },
      {
        scope: ['entity.name.tag', 'tag.html'],
        settings: {
          foreground: v('primary'),
        },
      },
      {
        scope: 'entity.name.function',
        settings: {
          foreground: v('function'),
        },
      },
      {
        scope: ['keyword', 'storage.type.class.jsdoc'],
        settings: {
          foreground: v('keyword'),
        },
      },
      {
        scope: [
          'storage',
          'storage.type',
          'support.type.builtin',
          'constant.language.undefined',
          'constant.language.null',
        ],
        settings: {
          foreground: v('builtin'),
        },
      },
      {
        scope: ['text.html.derivative', 'storage.modifier.package', 'storage.modifier.import', 'storage.type.java'],
        settings: {
          foreground,
        },
      },
      {
        scope: ['string', 'string punctuation.section.embedded source', 'attribute.value'],
        settings: {
          foreground: v('string'),
        },
      },
      {
        scope: ['punctuation.definition.string', 'punctuation.support.type.property-name'],
        settings: {
          foreground: v('string', '99'),
        },
      },
      {
        scope: 'support',
        settings: {
          foreground: v('primary'),
        },
      },
      {
        scope: ['property', 'meta.property-name', 'meta.object-literal.key', 'entity.name.tag.yaml', 'attribute.name'],
        settings: {
          foreground: v('property'),
        },
      },
      {
        scope: ['entity.other.attribute-name', 'invalid.deprecated.entity.other.attribute-name.html'],
        settings: {
          foreground: v('variable'),
        },
      },
      {
        scope: ['variable', 'identifier'],
        settings: {
          foreground: v('variable'),
        },
      },
      {
        scope: ['support.type.primitive', 'entity.name.type'],
        settings: {
          foreground: v('type'),
        },
      },
      {
        scope: 'namespace',
        settings: {
          foreground: v('namespace'),
        },
      },
      {
        scope: ['keyword.operator', 'keyword.operator.assignment.compound', 'meta.var.expr.ts'],
        settings: {
          foreground: v('operator'),
        },
      },
      {
        scope: 'invalid.broken',
        settings: {
          fontStyle: 'italic',
          foreground: colors.red['700'],
        },
      },
      {
        scope: 'invalid.deprecated',
        settings: {
          fontStyle: 'italic',
          foreground: colors.red['700'],
        },
      },
      {
        scope: 'invalid.illegal',
        settings: {
          fontStyle: 'italic',
          foreground: colors.red['700'],
        },
      },
      {
        scope: 'invalid.unimplemented',
        settings: {
          fontStyle: 'italic',
          foreground: colors.red['700'],
        },
      },
      {
        scope: 'carriage-return',
        settings: {
          fontStyle: 'italic underline',
          background: pick({ light: colors.red['500'], dark: colors.red['600'] }),
          foreground: colors.gray['50'],
          content: '^M',
        },
      },
      {
        scope: 'message.error',
        settings: {
          foreground: colors.red['700'],
        },
      },
      {
        scope: 'string variable',
        settings: {
          foreground: v('string'),
        },
      },
      {
        scope: ['source.regexp', 'string.regexp'],
        settings: {
          foreground: v('regex'),
        },
      },
      {
        scope: [
          'string.regexp.character-class',
          'string.regexp constant.character.escape',
          'string.regexp source.ruby.embedded',
          'string.regexp string.regexp.arbitrary-repitition',
        ],
        settings: {
          foreground: v('string'),
        },
      },
      {
        scope: 'string.regexp constant.character.escape',
        settings: {
          foreground: v('yellow'),
        },
      },
      {
        scope: ['support.constant'],
        settings: {
          foreground: v('constant'),
        },
      },
      {
        scope: ['keyword.operator.quantifier.regexp', 'constant.numeric', 'number'],
        settings: {
          foreground: v('number'),
        },
      },
      {
        scope: ['keyword.other.unit'],
        settings: {
          foreground: v('builtin'),
        },
      },
      {
        scope: ['constant.language.boolean', 'constant.language'],
        settings: {
          foreground: v('boolean'),
        },
      },
      {
        scope: 'meta.module-reference',
        settings: {
          foreground: primary,
        },
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: v('orange'),
        },
      },
      {
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
          fontStyle: 'bold',
          foreground: primary,
        },
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: v('interface'),
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          fontStyle: 'italic',
          foreground,
        },
      },
      {
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
          foreground,
        },
      },
      {
        scope: 'markup.raw',
        settings: {
          foreground: primary,
        },
      },
      {
        scope: ['markup.deleted', 'meta.diff.header.from-file', 'punctuation.definition.deleted'],
        settings: {
          background: colors.red['50'],
          foreground: colors.red['700'],
        },
      },
      {
        scope: ['markup.inserted', 'meta.diff.header.to-file', 'punctuation.definition.inserted'],
        settings: {
          background: colors.green['50'],
          foreground: colors.green['600'],
        },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
          background: colors.orange['100'],
          foreground: colors.orange['600'],
        },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
          foreground: colors.gray['100'],
          background: colors.blue['600'],
        },
      },
      {
        scope: 'meta.diff.range',
        settings: {
          foreground: pick({ light: colors.purple['500'], dark: colors.purple['600'] }),
          fontStyle: 'bold',
        },
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: colors.blue['600'],
        },
      },
      {
        scope: 'meta.separator',
        settings: {
          fontStyle: 'bold',
          foreground: colors.blue['600'],
        },
      },
      {
        scope: 'meta.output',
        settings: {
          foreground: colors.blue['600'],
        },
      },
      {
        scope: [
          'brackethighlighter.tag',
          'brackethighlighter.curly',
          'brackethighlighter.round',
          'brackethighlighter.square',
          'brackethighlighter.angle',
          'brackethighlighter.quote',
        ],
        settings: {
          foreground: colors.gray['600'],
        },
      },
      {
        scope: 'brackethighlighter.unmatched',
        settings: {
          foreground: colors.red['700'],
        },
      },
      {
        scope: [
          'constant.other.reference.link',
          'string.other.link',
          'punctuation.definition.string.begin.markdown',
          'punctuation.definition.string.end.markdown',
        ],
        settings: {
          foreground: v('string'),
        },
      },
      {
        scope: ['markup.underline.link.markdown', 'markup.underline.link.image.markdown'],
        settings: {
          foreground: secondaryForeground,
          fontStyle: 'underline',
        },
      },
      {
        scope: ['type.identifier', 'constant.other.character-class.regexp'],
        settings: {
          foreground: v('class'),
        },
      },
      {
        scope: ['entity.other.attribute-name.html.vue'],
        settings: {
          foreground: v('function'),
        },
      },
      {
        scope: ['invalid.illegal.unrecognized-tag.html'],
        settings: {
          fontStyle: 'normal',
        },
      },
    ],
    rules: [] as any[],
  }

  // monaco rules
  const rules: any[] = []

  theme.tokenColors.forEach(({ scope, settings }: any) => {
    for (const s of toArray(scope)) {
      rules.push({
        token: s,
        foreground: settings.foreground?.replace('#', ''),
      })
    }
  })

  theme.rules = rules

  return theme
}
