# eg-zoo
VR project for the City of Elk Grove.

## Entity Naming Conventions
While working on the model-moving solution, please use code conventions when naming your variables and models.
### ID
* ```{species}-{A || B}-{number}```
* ```species```: (e.g. 'giraffe', 'rhino')
* ```A```: adult
* ```B```: baby
* ```number```: nth species (total of adult and baby)

### Animation Key
* ```animation__{number}{letter}```
* ```number```: nth step
* ```letter```: nth animation in one step

#### Example
```animation__3a``` and ```animation__3b```: third sequence, perform two animations a and b

```
<a-entity
                id="giraffe-A1"
                gltf-model="./assets/giraffeAdult.glb"
                animation__0="
                    dur: 0;
                    ...
                "
                animation__1a="
                    startEvents: animationcomplete__0, animationcomplete__3b;
                "
                animation__2a="
                    ...
                "
                animation__3a="
                    ...
                "
                animation__3b="
                    ...
                "
            >
            </a-entity>
```

## How To Contribute
1. Clone this repository to your computer. This enables you to make publishable changes. Run all commands on Git CLI. <br>
```git clone https://github.com/franklin-software-developers/eg-zoo/```

2. Open this repository on VSCode. <br>
```code eg-zoo```

3. Make your changes. <br>

4. Create and switch to a new branch. See [Branch Name Conventions](##BranchNameConventions). <br>
```git checkout -b {branch name}```

5. Stage and verify your changes. <br>
```git add .```<br>
```git status```

7. Commit local changes.
```git commit -m "Concise description of my commit"```

8. Push your changes to this remote repo.
```git push --set-upstream origin {your branch name}```

9. Go to GitHub and click "New Pull Request"
![image](https://github.com/franklin-software-developers/eg-zoo/assets/64626132/cd0fb2f0-29b8-440e-9cda-fdb2940fd9a6)

10. Click "Create Pull Request"

11. Your pull request is ready to be approved by me!

## Branch Name Conventions
Branches should be named with:
- Your first name
- Hyphen
- Category (see [Branch Name Categories](###BranchNameCategories))
- One-to-two word description

### Example
If I'm adding a minimap feature to the project, the command to make a new branch would look like:
```
git checkout -b nuri-feature-minimap
```

### Branch Name Categories
|   |   |
|---|---|
| hotfix | for quickly fixing critical issues
| bugfix | for fixing a bug |
| feature | for adding, removing, or modifying a feature|
| test | for experimenting with a non-issue |
| wip | work in progress|

[Credits](https://tilburgsciencehub.com/building-blocks/collaborate-and-share-your-work/use-github/naming-git-branches/)
