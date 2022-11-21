import React from "react";

export default function BlogPost() {
    return (
        <div>
            <form style={{display: "flex", flexDirection: "column"}}>
                <label for="title">Title</label>
                <input type="text" name="title" />
                <label for="content">Content</label>
                <textarea name="content" rows="15" cols="50" />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}