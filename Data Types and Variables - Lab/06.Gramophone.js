solve = (bandName, albumName, song_name) => {
    let durationInSeconds = (albumName.length * bandName.length) * song_name.length / 2;
    let rotation = Math.ceil(durationInSeconds / 2.5)
    console.log(`The plate was rotated ${rotation} times.`);
}

solve("Black Sabbath", "Paranoid", "War Pigs")