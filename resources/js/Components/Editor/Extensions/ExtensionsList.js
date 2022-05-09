// tiptap
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import Image from '@tiptap/extension-image'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import Highlight from '@tiptap/extension-highlight'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import FontFamily from '@tiptap/extension-font-family'
import Focus from '@tiptap/extension-focus'
import TextAlign from '@tiptap/extension-text-align'
import Typography from '@tiptap/extension-typography'





// custom
import {TrailingNode} from "./TrailingNode";


export default [
    // tiptap
    StarterKit,
    Image,
    Table.configure({
        resizable: true,
    }),
    TableRow,
    TableHeader,
    TableCell,
    Underline,
    TextStyle,
    Color,
    Focus,
    Typography,
    FontFamily,
    Highlight.configure({ multicolor: true }),
    Placeholder.configure({
        placeholder: 'Напишите что-нибудь хорошее ...',
    }),
    Link.configure({
        openOnClick: false,
    }),
    TextAlign.configure({
        types: ['heading', 'paragraph'],
    }),

    // custom
    TrailingNode

]
