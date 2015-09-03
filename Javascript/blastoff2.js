function blastoff(count) {
    
    var currentCount = count;

    function callback() {
        console.log(currentCount);
        currentCount -=1;
        if (currentCount === 0) {
            console.log("FIRE!");
        } else {
            setTimeout(callback, 1000);
        }
    }

    setTimeout(callback, 1000);
}

blastoff(5);