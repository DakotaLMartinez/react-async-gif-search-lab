Data 

Behavior

Display

## Container => Behavior & Data
## Presentational => Data & Display

# Behaviors 
- type in search input
- submit search form

# Data 
- content of search input
- Gifs loaded from API

# Display
- Navbar
- Form
- Images

We need to decide where these things should live. 

### GifSearch 

#### Behaviors 
- type in search input
- submit search form (we'll need an event handler but it will also need to update state of its parent component via a function passed down as a prop)

#### Data 
- content of search input

#### Display
- Form

### GifList 

#### Data
- Gifs loaded from API (props)
#### Behavior
- None Here (presentational)
#### Display 
- Images in list

### GifListContainer 

#### Data
- Gifs loaded from API (state)
#### Behavior
- submit search form -> hit API and setState
#### Display 
- GifSearch(callback to handle search)
- GifList(images prop from component state)

               App
            /       \  
        Navbar     GifListContainer  
                    /        \       
                GifSearch - GifList