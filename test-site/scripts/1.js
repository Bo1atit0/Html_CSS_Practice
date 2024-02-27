try {
    const args = process.argv[2]
    if (args === undefined) {
        throw new Error ("No argument")
    } else {
        console.log("Argument:", args)
    }
} catch (error) {
    console.error ("An error occured:", error.message)
}