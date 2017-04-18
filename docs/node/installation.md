# Installing node

## Windows
* Go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/), grab the correct installer and install it into your machine


## Linux
* You can use `nvm` to install `node`, from your terminal just run the following

    ```
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
    ```

* Once you've installed `nvm`, you can then install `node`

    ```
    nvm install node
    ```

    > This will install the latest version of node

    > So node also come packaged with something called **npm** ([node package manager](https://www.npmjs.com/))

    > This package manager, as the name suggests, is going to help us manage the packages we use


# Packages? Whats a package?
* In the world of Open Source, one of the central idealogies is to be able to leverage the work of other developers to accelerate our development. In essence, developers make their work available in the form of packages AKA node modules. This node module is published to a central repository from where other developers can download and make use of the modules.
