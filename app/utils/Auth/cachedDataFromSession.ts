import { getDataFromSession } from "../tokenUtils";
import { cache } from 'react'

const cachedDataFromSession = cache(getDataFromSession);

export default cachedDataFromSession;