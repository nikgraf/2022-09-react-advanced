## Explaination

Best to see https://beta.reactjs.org/learn/synchronizing-with-effects#challenges

> Each render’s Effect has its own ignore variable. Initially, the ignore variable is set to false. However, if an Effect gets cleaned up (such as when you select a different person), its ignore variable becomes true. So now it doesn’t matter in which order the requests complete. Only the last person’s Effect will have ignore set to false, so it will call setBio(result). Past Effects have been cleaned up, so the if (!ignore) check will prevent them from calling setBio

## Bonus

> In addition to ignoring the result of an outdated API call, you can also use AbortController to cancel the requests that are no longer needed. However, by itself this is not enough to protect against race conditions. More asynchronous steps could be chained after the fetch, so using an explicit flag like ignore is the most reliable way to fix this type of problems.
