//Задача № 1

function cachingDecoratorNew(func) {
    let cache = [];

        function wrapper(...args) {
            const hash = md5(args);
            const objectInCache = cache.find((item) => item.hash === hash);
            if (objectInCache) {
                console.log("Из кеша: " + objectInCache.value);
                return "Из кеша: " + objectInCache.value;
            }

            const result = func(...args);
            cache.push({ hash: hash, value: result });

            if (cache.length > 5) {
                cache.shift();
            }
              
            console.log("Вычисляем: " + result);
            return "Вычисляем: " + result;
        }  
        
        return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;
    let hasCalled = false;
  
    function wrapper(...args) {
        wrapper.allCount += 1;
        if(hasCalled) {
            return;
        }
    
        const result = func(...args);
        wrapper.count += 1; 
        hasCalled = true;  
        setTimeout(() => {
            func(...args);
            hasCalled = false;
        }, delay);
        return result;
    }
    
    return wrapper;
  }

  let sum = (...args) => args.reduce((acc, item) => acc + item, 0);
  let testDebounce = debounceDecoratorNew(sum, 3000);
  let testCache = cachingDecoratorNew(sum);

  testDebounce(2, 33);
  testCache(2, 3);

  