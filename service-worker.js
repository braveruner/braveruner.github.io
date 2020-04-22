/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/SJL-Y/Desktop/blog/public/2020/04/09/hello-world/index.html","910c73d83bc14cc5117d8bc5bdd49bea"],["C:/Users/SJL-Y/Desktop/blog/public/2020/04/19/yuan-ni-li-jin-qian-fan-gui-lai-reng-shao-nian/index.html","1233ed9c02cbed6a6e9afd2d10ce3be2"],["C:/Users/SJL-Y/Desktop/blog/public/2020/04/23/kai-yuan-u-pan-kuai-jie-fang-shi-bing-du-cha-sha-gong-ju/index.html","748423039ffb0ea3451df6b2376c4bf1"],["C:/Users/SJL-Y/Desktop/blog/public/aboutme/index.html","31744aa673c25bb4410d9aad2d4f677b"],["C:/Users/SJL-Y/Desktop/blog/public/archives/2020/04/index.html","f490f398ecd12912f976d84e5f40a613"],["C:/Users/SJL-Y/Desktop/blog/public/archives/2020/index.html","223813d29ea606a708488834882ea81b"],["C:/Users/SJL-Y/Desktop/blog/public/archives/index.html","2571cd85b20fa592489d5438e96e8845"],["C:/Users/SJL-Y/Desktop/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/SJL-Y/Desktop/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/SJL-Y/Desktop/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/SJL-Y/Desktop/blog/public/books/index.html","77597b2aba66f3deba26f2692120e72f"],["C:/Users/SJL-Y/Desktop/blog/public/categories/index.html","abeb475de6e94fa116fff6cbdef60f18"],["C:/Users/SJL-Y/Desktop/blog/public/categories/软件/index.html","550b30e4600180031556c4c1c318377d"],["C:/Users/SJL-Y/Desktop/blog/public/contact/index.html","539ff9b9759dd5f2697e063d70863c3b"],["C:/Users/SJL-Y/Desktop/blog/public/css/index.css","3a29a778768d30b73683af37ffc00b8a"],["C:/Users/SJL-Y/Desktop/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/SJL-Y/Desktop/blog/public/friends/index.html","77dec24014475ca51f39cf3a21275a46"],["C:/Users/SJL-Y/Desktop/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/SJL-Y/Desktop/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/SJL-Y/Desktop/blog/public/img/avatar.jpg","120e113799e5c0ae4ad6f4d44abd52bf"],["C:/Users/SJL-Y/Desktop/blog/public/img/code.jpg","5b4bb8a50d2c2f3118aea2aa94bf318c"],["C:/Users/SJL-Y/Desktop/blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/SJL-Y/Desktop/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/SJL-Y/Desktop/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/SJL-Y/Desktop/blog/public/img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["C:/Users/SJL-Y/Desktop/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/SJL-Y/Desktop/blog/public/img/pay.jpg","a5360a7cd1ed0e88f84025a70ddfdc15"],["C:/Users/SJL-Y/Desktop/blog/public/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["C:/Users/SJL-Y/Desktop/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/SJL-Y/Desktop/blog/public/img/story.png","fe345264050913a4ca5a7224b64d036d"],["C:/Users/SJL-Y/Desktop/blog/public/index.html","148c75bb70d1c33b9d13fb87f7e8e6e3"],["C:/Users/SJL-Y/Desktop/blog/public/js/FunnyTitle.js","d01abfe781283b6360974fc2b0fb83a4"],["C:/Users/SJL-Y/Desktop/blog/public/js/main.js","01703d6f0d1048028bd0693e3860638a"],["C:/Users/SJL-Y/Desktop/blog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["C:/Users/SJL-Y/Desktop/blog/public/js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["C:/Users/SJL-Y/Desktop/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["C:/Users/SJL-Y/Desktop/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["C:/Users/SJL-Y/Desktop/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["C:/Users/SJL-Y/Desktop/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["C:/Users/SJL-Y/Desktop/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["C:/Users/SJL-Y/Desktop/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/Users/SJL-Y/Desktop/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["C:/Users/SJL-Y/Desktop/blog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["C:/Users/SJL-Y/Desktop/blog/public/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["C:/Users/SJL-Y/Desktop/blog/public/movies/index.html","f2288d145677f659b9d12bd9cadb04e4"],["C:/Users/SJL-Y/Desktop/blog/public/music/index.html","33cbf5d0ed7593867dfd35ee0823a5b3"],["C:/Users/SJL-Y/Desktop/blog/public/private/love3/index.html","5e3271ecb82bf2cc9300ab346133ff71"],["C:/Users/SJL-Y/Desktop/blog/public/private/love3/renxi/default.css","a17da59f355e192a8e0b580c522527f7"],["C:/Users/SJL-Y/Desktop/blog/public/private/love3/renxi/functions.js","49b4b5bef121397cc1800496bd4f1b20"],["C:/Users/SJL-Y/Desktop/blog/public/private/love3/renxi/jquery.min.js","db2cccefedcc741a45a582e91a5afe8d"],["C:/Users/SJL-Y/Desktop/blog/public/private/love3/renxi/jscex-async-powerpack.min.js","fd45d8a1f07587f6c02374252ec473ff"],["C:/Users/SJL-Y/Desktop/blog/public/private/love3/renxi/jscex-async.min.js","aa6f97f754cafa543faaab169e3fd001"],["C:/Users/SJL-Y/Desktop/blog/public/private/love3/renxi/jscex-builderbase.min.js","9b8461afeb0b66c0d0ad1301b41c243c"],["C:/Users/SJL-Y/Desktop/blog/public/private/love3/renxi/jscex-jit.js","c8694188c517a0c89ceb784fbda10e49"],["C:/Users/SJL-Y/Desktop/blog/public/private/love3/renxi/jscex-parser.js","a23cd8fa9a8937aed571c01ba52139a6"],["C:/Users/SJL-Y/Desktop/blog/public/private/love3/renxi/jscex.min.js","c36e85ee92e83d634d0245bc83889d87"],["C:/Users/SJL-Y/Desktop/blog/public/private/love3/renxi/love.js","3a08011e8453f0eb2f819bcd9e339240"],["C:/Users/SJL-Y/Desktop/blog/public/tags/index.html","aafd0f16d330383e6e189b4317be57c8"],["C:/Users/SJL-Y/Desktop/blog/public/tags/实用小工具/index.html","f717b04bb80d70c8ce7d58c89084a4bc"],["C:/Users/SJL-Y/Desktop/blog/public/tags/美文分享/index.html","1b5014a3b63de08879e1b89b9739c580"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







