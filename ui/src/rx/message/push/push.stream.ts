import { mergeMap, observableOf } from '../../../external/rxjs'
import { getApi } from '../../../api/api'
import type { Handler } from '../../handler/handler'
import { getMessageResponse$ } from '../message.stream'

const { pushMessages } = getApi()

export const getPushResponse$ = getMessageResponse$(pushMessages)
